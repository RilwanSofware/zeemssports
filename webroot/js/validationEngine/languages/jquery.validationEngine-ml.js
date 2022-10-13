(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* ഈ ഫീൽഡ് പൂരിപ്പിക്കേണ്ടതുണ്ട്",
                    "alertTextCheckboxMultiple": "* ദയവായി ഒരു ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക",
                    "alertTextCheckboxe": "* ഈ ചെക്ക്ബോക്സ് ആവശ്യമാണ്",
                    "alertTextDateRange": "* രണ്ട് തീയതി ശ്രേണി ഫീൽഡുകളും ആവശ്യമാണ്"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* ഫീൽഡ് ടെസ്റ്റിന് തുല്യമായിരിക്കണം"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* അസാധുവാണ്",
                    "alertText2": "തീയതി പരിധി"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "അസാധുവാണ്",
                    "alertText2": "തീയതി സമയ പരിധി"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* കുറഞ്ഞത്",
                    "alertText2": "പ്രതീകങ്ങൾ ആവശ്യമാണ്"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "*പരമാവധി",
                    "alertText2": " പ്രതീകങ്ങൾ അനുവദനീയമാണ്"
                },
		"groupRequired": {
                    "regex": "none",
                    "alertText": "* നിങ്ങൾ ഇനിപ്പറയുന്ന ഫീൽഡുകളിലൊന്ന് പൂരിപ്പിക്കണം",
                    "alertTextCheckboxMultiple": "* ദയവായി ഒരു ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക",
                    "alertTextCheckboxe": "* ഈ ചെക്ക്ബോക്സ് ആവശ്യമാണ്"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* ഏറ്റവും കുറഞ്ഞ മൂല്യം"
                },
                "max": {
                    "regex": "none",
                    "alertText": "* പരമാവധി മൂല്യം"
                },
                "past": {
                    "regex": "none",
                    "alertText": "* മുമ്പുള്ള തീയതി"
                },
                "future": {
                    "regex": "none",
                    "alertText": "* കഴിഞ്ഞ തീയതി"
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "*പരമാവധി",
                    "alertText2": "ഓപ്ഷനുകൾ അനുവദിച്ചു"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* ദയവായി തിരഞ്ഞെടുക്കുക",
                    "alertText2": "ഓപ്ഷനുകൾ"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* വയലുകൾ പൊരുത്തപ്പെടുന്നില്ല"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* അസാധുവായ ക്രെഡിറ്റ് കാർഡ് നമ്പർ"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* അസാധുവായ ഫോൺ നമ്പർ"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* അസാധുവായ ഇമെയിൽ വിലാസം"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* ആദ്യ പേരും അവസാന പേരും ആയിരിക്കണം"
                },
                "zip": {
                    "regex":/^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText":"* അസാധുവായ സിപ്പ് ഫോർമാറ്റ്"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* ഒരു സാധുവായ പൂർണ്ണസംഖ്യയല്ല"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* അസാധുവായ ഫ്ലോട്ടിംഗ് ദശാംശ സംഖ്യ"
                },
                "date": {                    
                    //	Check if date is valid by leap year
			"func": function (field) {
					var pattern = new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);
					var match = pattern.exec(field.val());
					if (match == null)
					   return false;
	
					var year = match[1];
					var month = match[2]*1;
					var day = match[3]*1;					
					var date = new Date(year, month - 1, day); // because months starts from 0.
	
					return (date.getFullYear() == year && date.getMonth() == (month - 1) && date.getDate() == day);
				},                		
			 "alertText": "* അസാധുവായ തീയതി, YYYY-MM-DD ഫോർമാറ്റിൽ ആയിരിക്കണം"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* അസാധുവായ IP വിലാസം"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* അസാധുവായ URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* നമ്പറുകൾ മാത്രം"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \u3300-\u9fff\uf900-\ufaff\u00C0-\u00ff\u0500-\u05FF']+$/,
                    "alertText": "* അക്ഷരങ്ങൾ മാത്രം"
                },
				"onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* അക്ഷരങ്ങൾ മാത്രം (ആക്സന്റ് അനുവദനീയമാണ്)"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* പ്രത്യേക പ്രതീകങ്ങൾ അനുവദനീയമല്ല"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
				/* Change */
				"onlyLetterNumberSp": {
                    "regex": /^[0-9a-zA-Z\s-]+$/,
                    "alertText": "* പ്രത്യേക പ്രതീകങ്ങൾ അനുവദനീയമല്ല"
                },
				/* end change */
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* ഈ ഉപയോക്താവ് ഇതിനകം എടുത്തതാണ്",
                    "alertTextLoad": "* സാധൂകരിക്കുന്നു, ദയവായി കാത്തിരിക്കുക"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* This username is available",
                    "alertText": "* This user is already taken",
                    "alertTextLoad": "* Validating, please wait"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* ഈ ഉപയോക്തൃനാമം ലഭ്യമാണ്",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "** ഈ പേര് ലഭ്യമാണ്",
                    // speaks by itself
                    "alertTextLoad": "* സാധൂകരിക്കുന്നു, ദയവായി കാത്തിരിക്കുക"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* ഈ പേര് ഇതിനകം എടുത്തതാണ്",
	                    // speaks by itself
	                    "alertTextLoad": "* സാധൂകരിക്കുന്നു, ദയവായി കാത്തിരിക്കുക"
	                },
                "validate2fields": {
                    "alertText": "* ഹലോ ഇൻപുട്ട് ചെയ്യുക"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* അസാധുവായ തീയതി"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* അസാധുവായ തീയതി അല്ലെങ്കിൽ തീയതി ഫോർമാറ്റ്",
                    "alertText2": "പ്രതീക്ഷിക്കുന്ന ഫോർമാറ്റ്:",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM അല്ലെങ്കിൽ ", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
