(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* இந்த புலம் தேவை",
                    "alertTextCheckboxMultiple": "* ஒரு விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
                    "alertTextCheckboxe": "* இந்த தேர்வுப்பெட்டி தேவை",
                    "alertTextDateRange": "* இரண்டு தேதி வரம்பு புலங்களும் தேவை"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* புலம் சோதனைக்கு சமமாக இருக்க வேண்டும்"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* செல்லாது ",
                    "alertText2": "தேதி வரம்பு"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "செல்லாதது",
                    "alertText2": "தேதி நேர வரம்பு"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* குறைந்தபட்சம்",
                    "alertText2": " எழுத்துக்கள் தேவை"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* அதிகபட்சம்",
                    "alertText2": " எழுத்துக்கள் அனுமதிக்கப்படுகின்றன"
                },
		"groupRequired": {
                    "regex": "none",
                    "alertText": "* பின்வரும் புலங்களில் ஒன்றை நீங்கள் நிரப்ப வேண்டும்",
                    "alertTextCheckboxMultiple": "* ஒரு விருப்பத்தைத் தேர்ந்தெடுக்கவும்",
                    "alertTextCheckboxe": "* இந்த தேர்வுப்பெட்டி தேவை"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* குறைந்தபட்ச மதிப்பு"
                },
                "max": {
                    "regex": "none",
                    "alertText": "* அதிகபட்ச மதிப்பு "
                },
                "past": {
                    "regex": "none",
                    "alertText": "* இதற்கு முந்தைய தேதி"
                },
                "future": {
                    "regex": "none",
                    "alertText": "* கடந்த தேதி"
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* அதிகபட்சம்",
                    "alertText2": "அனுமதிக்கப்பட்ட விருப்பங்கள்"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* தயவு செய்து தேர்வு செய்யவும்",
                    "alertText2": "விருப்பங்கள்"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* வயல்கள் பொருந்தவில்லை"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* தவறான கிரெடிட் கார்டு எண்"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* தவறான தொலைபேசி எண்"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* தவறான மின்னஞ்சல் முகவரி"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* முதல் மற்றும் கடைசி பெயர் இருக்க வேண்டும்"
                },
                "zip": {
                    "regex":/^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText":"* தவறான ஜிப் வடிவம்"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* சரியான முழு எண் இல்லை"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* தவறான மிதக்கும் தசம எண்"
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
			 "alertText": "* தவறான தேதி, YYYY-MM-DD வடிவத்தில் இருக்க வேண்டும்"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* தவறான IP முகவரி"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* தவறான வலைதள முகவரி"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* எண்கள் மட்டும்"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \u3300-\u9fff\uf900-\ufaff\u00C0-\u00ff\u0500-\u05FF']+$/,
                    "alertText": "* கடிதங்கள் மட்டுமே"
                },
				"onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* கடிதங்கள் மட்டும் (உச்சரிப்புகள் அனுமதிக்கப்படுகின்றன)"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* சிறப்பு எழுத்துகள் அனுமதிக்கப்படவில்லை"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
				/* Change */
				"onlyLetterNumberSp": {
                    "regex": /^[0-9a-zA-Z\s-]+$/,
                    "alertText": "* சிறப்பு எழுத்துகள் அனுமதிக்கப்படவில்லை"
                },
				/* end change */
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* இந்த பயனர் ஏற்கனவே எடுக்கப்பட்டவர்",
                    "alertTextLoad": "* சரிபார்க்கிறது, காத்திருக்கவும்"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* இந்த பயனர் பெயர் கிடைக்கிறது",
                    "alertText": "* இந்த பயனர் ஏற்கனவே எடுக்கப்பட்டவர்",
                    "alertTextLoad": "* சரிபார்க்கிறது, காத்திருக்கவும்"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* இந்த பெயர் ஏற்கனவே எடுக்கப்பட்",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* இந்த பெயர் கிடைக்கிறது",
                    // speaks by itself
                    "alertTextLoad": "* சரிபார்க்கிறது, காத்திருக்கவும்"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* இந்த பெயர் ஏற்கனவே எடுக்கப்பட்டது",
	                    // speaks by itself
	                    "alertTextLoad": "* சரிபார்க்கிறது, காத்திருக்கவும்"
	                },
                "validate2fields": {
                    "alertText": "* ஹலோவை உள்ளிடவும்"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* தவறான தேதி"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* தவறான தேதி அல்லது தேதி வடிவம்",
                    "alertText2": "எதிர்பார்க்கப்படும் வடிவம்: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM அல்லது", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
