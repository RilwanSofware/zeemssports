(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* ಈ ಜಾಗ ಬೇಕಾಗಿದೆ",
                    "alertTextCheckboxMultiple": "* ದಯವಿಟ್ಟು ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ",
                    "alertTextCheckboxe": "* ದಯವಿಟ್ಟು ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ",
                    "alertTextDateRange": "* ಎರಡೂ ದಿನಾಂಕ ಶ್ರೇಣಿ ಕ್ಷೇತ್ರಗಳು ಅಗತ್ಯವಿದೆ"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* ಕ್ಷೇತ್ರವು ಪರೀಕ್ಷೆಗೆ ಸಮನಾಗಿರಬೇಕು"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* ಅಮಾನ್ಯ",
                    "alertText2": "ದಿನಾಂಕ ಶ್ರೇಣಿ"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* ಅಮಾನ್ಯ",
                    "alertText2": "ದಿನಾಂಕ ಸಮಯ ಶ್ರೇಣಿ"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* ಕನಿಷ್ಠ",
                    "alertText2": "ಅಕ್ಷರಗಳು ಅಗತ್ಯವಿದೆ"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* ಗರಿಷ್ಠ",
                    "alertText2": "ಅಕ್ಷರಗಳನ್ನು ಅನುಮತಿಸಲಾಗಿದೆ"
                },
		"groupRequired": {
                    "regex": "none",
                    "alertText": "* ನೀವು ಈ ಕೆಳಗಿನ ಕ್ಷೇತ್ರಗಳಲ್ಲಿ ಒಂದನ್ನು ಭರ್ತಿ ಮಾಡಬೇಕು",
                    "alertTextCheckboxMultiple": "* ದಯವಿಟ್ಟು ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆರಿಸಿ",
                    "alertTextCheckboxe": "* ಈ ಚೆಕ್‌ಬಾಕ್ಸ್ ಅಗತ್ಯವಿದೆ"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* ಕನಿಷ್ಠ ಮೌಲ್ಯ"
                },
                "max": {
                    "regex": "none",
                    "alertText": "* ಗರಿಷ್ಠ ಮೌಲ್ಯ"
                },
                "past": {
                    "regex": "none",
                    "alertText": "* ಹಿಂದಿನ ದಿನಾಂಕ"
                },
                "future": {
                    "regex": "none",
                    "alertText": "* ಕಳೆದ ದಿನಾಂಕ"
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* ಗರಿಷ್ಠ",
                    "alertText2": " ಆಯ್ಕೆಗಳನ್ನು ಅನುಮತಿಸಲಾಗಿದೆ"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* ದಯವಿಟ್ಟು ಆಯ್ಕೆ ಮಾಡು",
                    "alertText2": "ಆಯ್ಕೆಗಳು"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* ಕ್ಷೇತ್ರಗಳು ಹೊಂದಿಕೆಯಾಗುವುದಿಲ್ಲ"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* ಅಮಾನ್ಯ ಕ್ರೆಡಿಟ್ ಕಾರ್ಡ್ ಸಂಖ್ಯೆ"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* ಅಮಾನ್ಯ ಫೋನ್ ಸಂಖ್ಯೆ"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* ಅಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸ"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* ಮೊದಲ ಮತ್ತು ಕೊನೆಯ ಹೆಸರು ಇರಬೇ"
                },
                "zip": {
                    "regex":/^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText":"* ಅಮಾನ್ಯವಾದ ಜಿಪ್ ಫಾರ್ಮ್ಯಾಟ್"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* ಮಾನ್ಯ ಪೂರ್ಣಾಂಕವಲ್ಲ"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* ಅಮಾನ್ಯವಾದ ತೇಲುವ ದಶಮಾಂಶ ಸಂಖ್ಯೆ"
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
			 "alertText": "* ಅಮಾನ್ಯ ದಿನಾಂಕ, YYYY-MM-DD ಫಾರ್ಮ್ಯಾಟ್‌ನಲ್ಲಿರಬೇಕು"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* ಅಮಾನ್ಯ IP ವಿಳಾಸ"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* ಅಮಾನ್ಯ URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* ಸಂಖ್ಯೆಗಳು ಮಾತ್ರ"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \u3300-\u9fff\uf900-\ufaff\u00C0-\u00ff\u0500-\u05FF']+$/,
                    "alertText": "* ಅಕ್ಷರಗಳು ಮಾತ್ರ"
                },
				"onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* ಅಕ್ಷರಗಳು ಮಾತ್ರ (ಉಚ್ಚಾರಣೆಗಳನ್ನು ಅನುಮತಿಸಲಾಗಿದೆ)"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* ಯಾವುದೇ ವಿಶೇಷ ಅಕ್ಷರಗಳನ್ನು ಅನುಮತಿಸಲಾಗುವುದಿಲ್ಲ"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
				/* Change */
				"onlyLetterNumberSp": {
                    "regex": /^[0-9a-zA-Z\s-]+$/,
                    "alertText": "* ಯಾವುದೇ ವಿಶೇಷ ಅಕ್ಷರಗಳನ್ನು ಅನುಮತಿಸಲಾಗುವುದಿಲ್ಲ"
                },
				/* end change */
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* ಈ ಬಳಕೆದಾರರನ್ನು ಈಗಾಗಲೇ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ",
                    "alertTextLoad": "* ಮೌಲ್ಯೀಕರಿಸಲಾಗುತ್ತಿದೆ, ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* ಈ ಬಳಕೆದಾರಹೆಸರು ಲಭ್ಯವಿದೆ",
                    "alertText": "* ಈ ಬಳಕೆದಾರರನ್ನು ಈಗಾಗಲೇ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ",
                    "alertTextLoad": "* ಮೌಲ್ಯೀಕರಿಸಲಾಗುತ್ತಿದೆ, ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* ಈ ಹೆಸರನ್ನು ಈಗಾಗಲೇ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* ಈ ಹೆಸರು ಲಭ್ಯವಿದೆ",
                    // speaks by itself
                    "alertTextLoad": "* ಮೌಲ್ಯೀಕರಿಸಲಾಗುತ್ತಿದೆ, ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* ಈ ಹೆಸರನ್ನು ಈಗಾಗಲೇ ತೆಗೆದುಕೊಳ್ಳಲಾಗಿದೆ",
	                    // speaks by itself
	                    "alertTextLoad": "* ಮೌಲ್ಯೀಕರಿಸಲಾಗುತ್ತಿದೆ, ದಯವಿಟ್ಟು ನಿರೀಕ್ಷಿಸಿ"
	                },
                "validate2fields": {
                    "alertText": "* ಹಲೋ ನಮೂದಿಸಿ"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* ಅಮಾನ್ಯ ದಿನಾಂಕ"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* ಅಮಾನ್ಯವಾದ ದಿನಾಂಕ ಅಥವಾ ದಿನಾಂಕ ಸ್ವರೂಪ",
                    "alertText2": "ನಿರೀಕ್ಷಿತ ಸ್ವರೂಪ:",
                    "alertText3": "mm / dd / yyyy hh: mm: ss AM | PM ಅಥವಾ", 
                    "alertText4": "yyyy-mm-dd hh: mm: ss AM | PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
