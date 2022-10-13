(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* ଏ ହି କ୍ଷେ ତ୍ର ଦରକାର",
                    "alertTextCheckboxMultiple": "* ଦୟାକରି ଏକ ବିକଳ୍ପ ବାଛନ୍ତୁ |",
                    "alertTextCheckboxe": "* ଏହି ଚେକ୍ ବକ୍ସ ଆବଶ୍ୟକ |",
                    "alertTextDateRange": "* ଉଭୟ ତାରିଖ ପରିସର କ୍ଷେତ୍ର ଆବଶ୍ୟକ |"
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* କ୍ଷେତ୍ର ନିଶ୍ଚିତ ଭାବରେ ସମାନ ପରୀକ୍ଷା |"
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* ଅବ val ଧ |",
                    "alertText2": "ତାରିଖ ପରିସର"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* ଅବ val ଧ |",
                    "alertText2": "ତାରିଖ ସମୟ ପରିସର |"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* ସର୍ବନିମ୍ନ",
                    "alertText2": "ଅକ୍ଷରଗୁଡ଼ିକ ଆବଶ୍ୟକ |"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* ସର୍ବାଧିକ",
                    "alertText2": " ଅକ୍ଷରଗୁଡିକ ଅନୁମତିପ୍ରାପ୍ତ |"
                },
		"groupRequired": {
                    "regex": "none",
                    "alertText": "* ଆପଣ ନିମ୍ନଲିଖିତ କ୍ଷେତ୍ରଗୁଡିକ ମଧ୍ୟରୁ ଗୋଟିଏ ପୁରଣ କରିବା ଜରୁରୀ |",
                    "alertTextCheckboxMultiple": "* ଦୟାକରି ଏକ ବିକଳ୍ପ ବାଛନ୍ତୁ |",
                    "alertTextCheckboxe": "* ଏହି ଚେକ୍ ବକ୍ସ ଆବଶ୍ୟକ |"
                },
                "min": {
                    "regex": "none",
                    "alertText": "* ସର୍ବନିମ୍ନ ମୂଲ୍ୟ ହେଉଛି |"
                },
                "max": {
                    "regex": "none",
                    "alertText": "* ସର୍ବାଧିକ ମୂଲ୍ୟ ହେଉଛି |"
                },
                "past": {
                    "regex": "none",
                    "alertText": "* ତାରିଖ ପୂର୍ବରୁ"
                },
                "future": {
                    "regex": "none",
                    "alertText": "* ତାରିଖ ପୂର୍ବରୁ"
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* ସର୍ବାଧିକ ",
                    "alertText2": " ବିକଳ୍ପଗୁଡିକ ଅନୁମତିପ୍ରାପ୍ତ |"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* ଦୟାକରି ଚୟନ କରନ୍ତୁ |",
                    "alertText2": " ବିକଳ୍ପଗୁଡ଼ିକ"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* କ୍ଷେତ୍ରଗୁଡିକ ମେଳ ଖାଉ ନାହିଁ |"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* ଅବ val ଧ କ୍ରେଡିଟ୍ କାର୍ଡ ନମ୍ବର |"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* ଅବ phone ଧ ଫୋନ୍ ନମ୍ବର |"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* ଅବ val ଧ ଇମେଲ୍ ଠିକଣା |"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* ପ୍ରଥମ ଏବଂ ଶେଷ ନାମ ହେବା ଜରୁରୀ |"
                },
                "zip": {
                    "regex":/^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText":"* ଅବ val ଧ ଜିପ୍ ଫର୍ମାଟ୍ |"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* ଏକ ବ valid ଧ ପୂର୍ଣ୍ଣ ସଂଖ୍ୟା ନୁହେଁ |"
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* ଅବ val ଧ ଭାସମାନ ଦଶମିକ ସଂଖ୍ୟା |"
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
			 "alertText": "* ଅବ val ଧ ତାରିଖ, YYYY-MM-DD ଫର୍ମାଟରେ ହେବା ଜରୁରୀ |"
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* ଅବ IP ଧ IP ଠିକଣା |"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* ଅବ val ଧ URL |"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* କେବଳ ସଂଖ୍ୟା |"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \u3300-\u9fff\uf900-\ufaff\u00C0-\u00ff\u0500-\u05FF']+$/,
                    "alertText": "* କେବଳ ଅକ୍ଷରଗୁଡ଼ିକ"
                },
				"onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* କେବଳ ଅକ୍ଷରଗୁଡ଼ିକ (ଉଚ୍ଚାରଣ ଅନୁମୋଦିତ)"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* କ special ଣସି ବିଶେଷ ଅକ୍ଷର ଅନୁମୋଦିତ ନୁହେଁ |"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
				/* Change */
				"onlyLetterNumberSp": {
                    "regex": /^[0-9a-zA-Z\s-]+$/,
                    "alertText": "* କ special ଣସି ବିଶେଷ ଅକ୍ଷର ଅନୁମୋଦିତ ନୁହେଁ |"
                },
				/* end change */
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* ଏହି ଉପଭୋକ୍ତା ପୂର୍ବରୁ ନିଆଯାଇଛି |",
                    "alertTextLoad": "* ବ id ଧତା, ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ |"
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* ଏହି ଉପଯୋଗକର୍ତ୍ତା ନାମ ଉପଲବ୍ଧ |",
                    "alertText": "* ଏହି ଉପଭୋକ୍ତା ପୂର୍ବରୁ ନିଆଯାଇଛି |",
                    "alertTextLoad": "* ବ id ଧତା, ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ |"
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* ଏହି ନାମ ପୂର୍ବରୁ ନିଆଯାଇଛି |",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* ଏହି ନାମ ଉପଲବ୍ଧ |",
                    // speaks by itself
                    "alertTextLoad": "* ବ id ଧତା, ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ |"
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* ଏହି ନାମ ପୂର୍ବରୁ ନିଆଯାଇଛି |",
	                    // speaks by itself
	                    "alertTextLoad": "* ବ id ଧତା, ଦୟାକରି ଅପେକ୍ଷା କରନ୍ତୁ |"
	                },
                "validate2fields": {
                    "alertText": "* ଦୟାକରି HELLO ଇନପୁଟ୍ କରନ୍ତୁ |"
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* ଅବ val ଧ ତାରିଖ |"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* ଅବ val ଧ ତାରିଖ କିମ୍ବା ତାରିଖ ଫର୍ମାଟ୍ |",
                    "alertText2": "ଆଶାକରାଯାଇଥିବା ଫର୍ମାଟ୍:",
                    "alertText3": "mm / dd / yyyy hh: mm: ss AM | PM କିମ୍ବା", 
                    "alertText4": "yyyy-mm-dd hh: mm: ss AM | PM |"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
