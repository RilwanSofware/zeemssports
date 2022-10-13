(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* हे क्षेत्र आवश्यक आहे",
                    "alertTextCheckboxMultiple": "* कृपया एक पर्याय निवडा",
                    "alertTextCheckboxe": "* हा चेकबॉक्स आवश्यक आहे",
                    "alertTextDateRange": "* दोन्ही तारीख श्रेणी फील्ड आवश्यक आहेत"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* फील्ड चाचणी समान असणे आवश्यक आहे"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* अवैध",
                    "alertText2": "तारीख श्रेणी"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* अवैध",
                    "alertText2": "तारीख वेळ श्रेणी"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* किमान",
                    "alertText2": " वर्ण आवश्यक"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* कमाल",
                    "alertText2": "वर्णांना परवानगी आहे"
                },
		"groupRequired": {
                    "regex": "none",
                    "alertText": "* तुम्ही खालीलपैकी एक फील्ड भरणे आवश्यक आहे",
                    "alertTextCheckboxMultiple": "* कृपया एक पर्याय निवडा",
                    "alertTextCheckboxe": "* हा चेकबॉक्स आवश्यक आहे"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* किमान मूल्य आहे"
                },
                "max": {
                    "regex": "none",
                    "alertText": "* कमाल मूल्य आहे"
                },
                "past": {
                    "regex": "none",
                    "alertText": "* पूर्वीची तारीख "
                },
                "future": {
                    "regex": "none",
                    "alertText": "* मागील तारीख"
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* कमाल",
                    "alertText2": " पर्यायांना परवानगी आहे"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* कृपया निवडा",
                    "alertText2": " पर्याय"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* फील्ड जुळत नाहीत"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* अवैध क्रेडिट कार्ड क्रमांक"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* अवैध दूरध्वनी क्रमांक"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* अवैध ई - मेल पत्ता"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* नाव आणि आडनाव असणे आवश्यक आहे"
                },
                "zip": {
                    "regex":/^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText":"* अवैध झिप स्वरूप"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* वैध पूर्णांक नाही"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* अवैध फ्लोटिंग दशांश संख्या"
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
			 "alertText": "* अवैध तारीख, YYYY-MM-DD फॉरमॅटमध्ये असणे आवश्यक आहे"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* अवैध IP पत्ता"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* अवैध URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "*फक्त संख्या"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \u3300-\u9fff\uf900-\ufaff\u00C0-\u00ff\u0500-\u05FF']+$/,
                    "alertText": "* फक्त अक्षरे"
                },
				"onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* फक्त अक्षरे (उच्चारांना अनुमती आहे)"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* फक्त अक्षरे (उच्चारांना अनुमती आहे)"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
				/* Change */
				"onlyLetterNumberSp": {
                    "regex": /^[0-9a-zA-Z\s-]+$/,
                    "alertText": "* विशेष वर्णांना परवानगी नाही"
                },
				/* end change */
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* हा वापरकर्ता आधीच घेतलेला आहे",
                    "alertTextLoad": "* प्रमाणित करत आहे, कृपया प्रतीक्षा करा"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* हे वापरकर्तानाव उपलब्ध आहे",
                    "alertText": "* हा वापरकर्ता आधीच घेतलेला आहे",
                    "alertTextLoad": "* प्रमाणित करत आहे, कृपया प्रतीक्षा करा"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* हे नाव आधीच घेतले आहे",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* हे नाव उपलब्ध आहे",
                    // speaks by itself
                    "alertTextLoad": "* प्रमाणित करत आहे, कृपया प्रतीक्षा करा"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* हे नाव आधीच घेतले आहे",
	                    // speaks by itself
	                    "alertTextLoad": "* प्रमाणित करत आहे, कृपया प्रतीक्षा करा"
	                },
                "validate2fields": {
                    "alertText": "* कृपया HELLO इनपुट करा"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* अवैध तारीख"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* अवैध तारीख किंवा तारीख स्वरूप",
                    "alertText2": "अपेक्षित स्वरूप:",
                    "alertText3": "mm / dd / yyyy hh: mm: ss AM | PM किंवा", 
                    "alertText4": "yyyy-mm-dd hh: mm: ss AM | PM"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
