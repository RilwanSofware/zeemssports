(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* यह फ़ील्ड आवश्यक है",
                    "alertTextCheckboxMultiple": "* कृपया एक विकल्प चुनें",
                    "alertTextCheckboxe": "* यह चेकबॉक्स आवश्यक है",
                    "alertTextDateRange": "* दोनों दिनांक सीमा फ़ील्ड आवश्यक हैं"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* फ़ील्ड को बराबर परीक्षण करना चाहिए"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* अमान्य",
                    "alertText2": "तिथि सीमा"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* अमान्य",
                    "alertText2": "दिनांक समय सीमा"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* न्यूनतम",
                    "alertText2": "आवश्यक वर्ण"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* ज्यादा से ज्यादा",
                    "alertText2": "पात्रों की अनुमति है"
                },
		"groupRequired": {
                    "regex": "none",
                    "alertText": "* आपको निम्न में से कोई एक फ़ील्ड भरना होगा",
                    "alertTextCheckboxMultiple": "* कृपया एक विकल्प चुनें",
                    "alertTextCheckboxe": "* यह चेकबॉक्स आवश्यक है"
                },
                "min": {
                    "regex": "none",
                    "alertText": "*न्यूनतम मूल्य है"
                },
                "max": {
                    "regex": "none",
                    "alertText": "*अधिकतम मान है"
                },
                "past": {
                    "regex": "none",
                    "alertText": "*पहले की तारीख"
                },
                "future": {
                    "regex": "none",
                    "alertText": "* तारीख अतीत"
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* ज्यादा से ज्यादा",
                    "alertText2": " विकल्प की अनुमति"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* कृपया चुने",
                    "alertText2": "विकल्प"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* फील्ड्स से मेल नहीं खाते"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* अवैध क्रेडिट कार्ड नंबर"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* अवैध फोन नंबर"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* अमान्य ईमेल पता"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* पहला और अंतिम नाम होना चाहिए"
                },
                "zip": {
                    "regex":/^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText":"* अमान्य ज़िप प्रारूप"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* मान्य पूर्णांक नहीं है"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* अमान्य अस्थायी दशमलव संख्या"
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
			 "alertText": "* अमान्य तिथि, YYYY-MM-DD प्रारूप में होनी चाहिए"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* अमान्य आईपी पता"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* अवैध यूआरएल"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* केवल आंकड़े"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \u3300-\u9fff\uf900-\ufaff\u00C0-\u00ff\u0500-\u05FF']+$/,
                    "alertText": "* केवल खत"
                },
				"onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* केवल पत्र (उच्चारण की अनुमति है)"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* कोई खास अक्षर की अनुमति नहीं है"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
				/* Change */
				"onlyLetterNumberSp": {
                    "regex": /^[0-9a-zA-Z\s-]+$/,
                    "alertText": "* कोई खास अक्षर की अनुमति नहीं है"
                },
				/* end change */
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* यह उपयोगकर्ता पहले ही लिया जा चुका है",
                    "alertTextLoad": "* मान्य हो रहा है, कृपया प्रतीक्षा करें"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* यह उपयोगकर्तानाम उपलब्ध है",
                    "alertText": "* यह उपयोगकर्ता पहले ही लिया जा चुका है",
                    "alertTextLoad": "* मान्य हो रहा है, कृपया प्रतीक्षा करें"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* यह नाम पहले ही ले लिया गया है",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "*यह नाम उपलब्ध है",
                    // speaks by itself
                    "alertTextLoad": "* मान्य हो रहा है, कृपया प्रतीक्षा करें"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* यह नाम पहले ही ले लिया गया है",
	                    // speaks by itself
	                    "alertTextLoad": "* मान्य हो रहा है, कृपया प्रतीक्षा करें"
	                },
                "validate2fields": {
                    "alertText": "*कृपया हैलो इनपुट करें"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* अमान्य तिथि"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "*अमान्य तिथि या तिथि प्रारूप",
                    "alertText2": "अपेक्षित प्रारूप: ",
                    "alertText3": "मिमी/दिन/वर्ष hh:mm:ss AM|PM or", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss AM|PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
