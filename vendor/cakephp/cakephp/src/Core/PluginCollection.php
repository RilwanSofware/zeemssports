<?php
/**
 * CakePHP(tm) : Rapid Development Framework (https://cakephp.org)
 * Copyright 2005-2011, Cake Software Foundation, Inc. (https://cakefoundation.org)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 *
 * @copyright     Copyright (c) Cake Software Foundation, Inc. (https://cakefoundation.org)
 * @link          https://cakephp.org CakePHP(tm) Project
 * @since         3.6.0
 * @license       https://opensource.org/licenses/mit-license.php MIT License
 */
namespace Cake\Core;

use Cake\Core\Exception\MissingPluginException;
use Countable;
use InvalidArgumentException;
use Iterator;

/**
 * Plugin Collection
 *
 * Holds onto plugin objects loaded into an application, and
 * provides methods for iterating, and finding plugins based
 * on criteria.
 *
 * This class implements the Iterator interface to allow plugins
 * to be iterated, handling the situation where a plugin's hook
 * method (usually bootstrap) loads another plugin during iteration.
 *
 * While its implementation supported nested iteration it does not
 * support using `continue` or `break` inside loops.
 */
class PluginCollection implements Iterator, Countable
{
    /**
     * Plugin list
     *
     * @var array
     */
    protected $plugins = [];

    /**
     * Names of plugins
     *
     * @var string[]
     */
    protected $names = [];

    /**
     * Iterator position stack.
     *
     * @var int[]
     */
    protected $positions = [];

    /**
     * Loop depth
     *
     * @var int
     */
    protected $loopDepth = -1;

    /**
     * Constructor
     *
     * @param array $plugins The map of plugins to add to the collection.
     */
    public function __construct(array $plugins = [])
    {
        foreach ($plugins as $plugin) {
            $this->add($plugin);
        }
        $this->loadConfig();
    }

    /**
     * Load the path information stored in vendor/cakephp-plugins.php
     *
     * This file is generated by the cakephp/plugin-installer package and used
     * to locate plugins on the filesystem as applications can use `extra.plugin-paths`
     * in their composer.json file to move plugin outside of vendor/
     *
     * @internal
     * @return void
     */
    protected function loadConfig()
    {
        if (Configure::check('plugins')) {
            return;
        }
        $vendorFile = dirname(dirname(__DIR__)) . DIRECTORY_SEPARATOR . 'cakephp-plugins.php';
        if (!file_exists($vendorFile)) {
            $vendorFile = dirname(dirname(dirname(dirname(__DIR__)))) . DIRECTORY_SEPARATOR . 'cakephp-plugins.php';
            if (!file_exists($vendorFile)) {
                Configure::write(['plugins' => []]);

                return;
            }
        }

        $config = require $vendorFile;
        Configure::write($config);
    }

    /**
     * Locate a plugin path by looking at configuration data.
     *
     * This will use the `plugins` Configure key, and fallback to enumerating `App::path('Plugin')`
     *
     * This method is not part of the official public API as plugins with
     * no plugin class are being phased out.
     *
     * @param string $name The plugin name to locate a path for. Will return '' when a plugin cannot be found.
     * @return string
     * @throws \Cake\Core\Exception\MissingPluginException when a plugin path cannot be resolved.
     * @internal
     */
    public function findPath($name)
    {
        $this->loadConfig();

        $path = Configure::read('plugins.' . $name);
        if ($path) {
            return $path;
        }

        $pluginPath = str_replace('/', DIRECTORY_SEPARATOR, $name);
        $paths = App::path('Plugin');
        foreach ($paths as $path) {
            if (is_dir($path . $pluginPath)) {
                return $path . $pluginPath . DIRECTORY_SEPARATOR;
            }
        }

        throw new MissingPluginException(['plugin' => $name]);
    }

    /**
     * Add a plugin to the collection
     *
     * Plugins will be keyed by their names.
     *
     * @param \Cake\Core\PluginInterface $plugin The plugin to load.
     * @return $this
     */
    public function add(PluginInterface $plugin)
    {
        $name = $plugin->getName();
        $this->plugins[$name] = $plugin;
        $this->names = array_keys($this->plugins);

        return $this;
    }

    /**
     * Remove a plugin from the collection if it exists.
     *
     * @param string $name The named plugin.
     * @return $this
     */
    public function remove($name)
    {
        unset($this->plugins[$name]);
        $this->names = array_keys($this->plugins);

        return $this;
    }

    /**
     * Remove all plugins from the collection
     *
     * @return $this
     */
    public function clear()
    {
        $this->plugins = [];
        $this->names = [];
        $this->positions = [];
        $this->loopDepth = -1;

        return $this;
    }

    /**
     * Check whether the named plugin exists in the collection.
     *
     * @param string $name The named plugin.
     * @return bool
     */
    public function has($name)
    {
        return isset($this->plugins[$name]);
    }

    /**
     * Get the a plugin by name
     *
     * @param string $name The plugin to get.
     * @return \Cake\Core\PluginInterface The plugin.
     * @throws \Cake\Core\Exception\MissingPluginException when unknown plugins are fetched.
     */
    public function get($name)
    {
        if (!$this->has($name)) {
            throw new MissingPluginException(['plugin' => $name]);
        }

        return $this->plugins[$name];
    }

    /**
     * Implementation of Countable.
     *
     * Get the number of plugins in the collection.
     *
     * @return int
     */
    public function count():int
    {
        return count($this->plugins);
    }

    /**
     * Part of Iterator Interface
     *
     * @return void
     */
    public function next(): void
    {
        $this->positions[$this->loopDepth]++;
    }

    /**
     * Part of Iterator Interface
     *
     * @return string
     */
    public function key(): mixed
    {
        return $this->names[$this->positions[$this->loopDepth]];
    }

    /**
     * Part of Iterator Interface
     *
     * @return \Cake\Core\PluginInterface
     */
    public function current(): mixed
    {
        $position = $this->positions[$this->loopDepth];
        $name = $this->names[$position];

        return $this->plugins[$name];
    }

    /**
     * Part of Iterator Interface
     *
     * @return void
     */
    public function rewind(): void
    {
        $this->positions[] = 0;
        $this->loopDepth += 1;
    }

    /**
     * Part of Iterator Interface
     *
     * @return bool
     */
    public function valid(): bool
    {
        $valid = isset($this->names[$this->positions[$this->loopDepth]]);
        if (!$valid) {
            array_pop($this->positions);
            $this->loopDepth -= 1;
        }

        return $valid;
    }

    /**
     * Filter the plugins to those with the named hook enabled.
     *
     * @param string $hook The hook to filter plugins by
     * @return \Generator A generator containing matching plugins.
     * @throws \InvalidArgumentException on invalid hooks
     */
    public function with($hook)
    {
        if (!in_array($hook, PluginInterface::VALID_HOOKS)) {
            throw new InvalidArgumentException("The `{$hook}` hook is not a known plugin hook.");
        }
        foreach ($this as $plugin) {
            if ($plugin->isEnabled($hook)) {
                yield $plugin;
            }
        }
    }
}
