<?php
namespace App\Controller;
use Cake\Event\Event;
use App\Controller\AppController;
use Cake\ORM\TableRegistry;
use Cake\Datasource\ConnectionManager;


class UsersController extends AppController
{
	public function beforeFilter(Event $event)
    {
        // parent::beforeFilter($event);
        // Allow users to register and logout.
        // You should not add the "login" action to allow list. Doing so would
        // cause problems with normal functioning of AuthComponent.
        $this->Auth->allow(['login','index']);
    }
	
	
	public function index()
	{		
		return $this->redirect(["action"=>"login"]);		
	}
	
	public function login()
	{			
		if ($this->request->is('post')) {
            $users = $this->Auth->identify();
			if($users)
			{				
				if($users["role_name"] == "member")
				{
					$date_passed = false;
					$curr_date = date("Y-m-d");
					if(!empty($users["membership_valid_to"]) || $users["membership_valid_to"] != "")
					{
						$expiry_date = $users["membership_valid_to"]->format("Y-m-d");					
						if(strtotime($curr_date) > strtotime($expiry_date))
						{
							$date_passed = true;
						}
					}
					
					if($users["membership_status"] == "Expired" || $date_passed )
					{
						$this->Flash->error(__('Sorry, Your account is expired.'));
						return $this->redirect($this->Auth->logout());	
						die;
					}
				}
				
				$this->Auth->setUser($users);
				$check = $this->request->session()->read("Auth");
				if($check["User"]["activated"] != 1 && $check["User"]["role_name"] == "member")
				{
					$this->Flash->error(__('Error! Your account not activated yet!'));				
					return $this->redirect($this->Auth->logout());	
					die;
				}
				
				$this->loadComponent("GYMFunction");
				$logo = $this->GYMFunction->getSettings("gym_logo");
				$logo = (!empty($logo)) ? "/webroot/upload/". $logo : "Thumbnail-img2.png";
				$name = $this->GYMFunction->getSettings("name");
				$left_header = $this->GYMFunction->getSettings("left_header");
				$footer = $this->GYMFunction->getSettings("footer");
				$is_rtl = ($this->GYMFunction->getSettings("enable_rtl") == 1) ? true : false;
				$datepicker_lang = $this->GYMFunction->getSettings("datepicker_lang");
				$version = $this->GYMFunction->getSettings("system_version");
				
				$session = $this->request->session();
				$fname = $session->read('Auth.User.first_name');
				$lname = $session->read('Auth.User.last_name');
				$uid = $session->read('Auth.User.id');
				$join_date = $session->read('Auth.User.created_date');
				$profile_img = $session->read('Auth.User.image');
				// $assign_class = $session->read('Auth.User.assign_class');
				
				$role_name = $session->read('Auth.User.role_name');
				$session->write("User.display_name",$fname." ".$lname);		
				$session->write("User.id",$uid);		
				$session->write("User.role_name",$role_name);		
				$session->write("User.join_date",$join_date);
				$session->write("User.profile_img",$profile_img);
				$session->write("User.logo",$logo);
				$session->write("User.name",$name);
				$session->write("User.left_header",$left_header);				
				$session->write("User.footer",$footer);
				$session->write("User.is_rtl",$is_rtl);
				$session->write("User.dtp_lang",$datepicker_lang);
				$session->write("User.version",$version);
				// $session->write("User.assign_class",$assign_class);			
				
				return $this->redirect($this->Auth->redirectUrl());
			}else{
				$this->Flash->error(__('Invalid username or password, try again'));
			}
        }		
		if($this->Auth->user())
		{
			return $this->redirect($this->Auth->redirectUrl());
		}
		 $this->viewBuilder()->layout('login');
	}
	
	public function logout()
    {	
		$session = $this->request->session();
		$session->delete('User');		
		$session->destroy();		
        return $this->redirect($this->Auth->logout());		
    }	
	
}