(function($){
    $.fn.validationEngineLanguage = function(){
    };
    $.validationEngineLanguage = {
        newLang: function(){
            $.validationEngineLanguage.allRules = {
                "required": { // Add your regex rules here, you can take telephone as an example
                    "regex": "none",
                    "alertText": "* 이 필드는 필수 항목입니다.",
                    "alertTextCheckboxMultiple": "* 옵션을 선택해주세요",
                    "alertTextCheckboxe": "* 이 체크박스는 필수 항목입니다.",
                    "alertTextDateRange": "* 두 날짜 범위 필드 모두 필수 항목입니다."
                },
                "requiredInFunction": { 
                    "func": function(field, rules, i, options){
                        return (field.val() == "test") ? true : false;
                    },
                    "alertText": "* 필드는 테스트와 같아야 합니다."
                },
                "dateRange": {
                    "regex": "none",
                    "alertText": "* 유효하지 않은 ",
                    "alertText2": "날짜 범위"
                },
                "dateTimeRange": {
                    "regex": "none",
                    "alertText": "* 유효하지 않은",
                    "alertText2": "날짜 시간 범위"
                },
                "minSize": {
                    "regex": "none",
                    "alertText": "* 최소",
                    "alertText2": " 필요한 문자"
                },
                "maxSize": {
                    "regex": "none",
                    "alertText": "* 최대",
                    "alertText2": " 허용되는 문자"
                },
		"groupRequired": {
                    "regex": "none",
                    "alertText": "* 다음 필드 중 하나를 작성해야 합니다.",
                    "alertTextCheckboxMultiple": "* 옵션을 선택해주세요",
                    "alertTextCheckboxe": "* 이 체크박스는 필수 항목입니다."
                },
                "min": {
                    "regex": "none",
                    "alertText": "* 최소값은"
                },
                "max": {
                    "regex": "none",
                    "alertText": "* 최대값은"
                },
                "past": {
                    "regex": "none",
                    "alertText": "* 이전 날짜"
                },
                "future": {
                    "regex": "none",
                    "alertText": "* 지난 날짜"
                },	
                "maxCheckbox": {
                    "regex": "none",
                    "alertText": "* 최대",
                    "alertText2": "허용되는 옵션"
                },
                "minCheckbox": {
                    "regex": "none",
                    "alertText": "* 선택 해주세요",
                    "alertText2": "옵션"
                },
                "equals": {
                    "regex": "none",
                    "alertText": "* 필드가 일치하지 않음"
                },
                "creditCard": {
                    "regex": "none",
                    "alertText": "* 잘못된 신용 카드 번호"
                },
                "phone": {
                    // credit: jquery.h5validate.js / orefalo
                    "regex": /^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,
                    "alertText": "* 유효하지 않은 전화 번호"
                },
                "email": {
                    // HTML5 compatible email regex ( http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#    e-mail-state-%28type=email%29 )
                    "regex": /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    "alertText": "* 잘못된 이메일 주소"
                },
                "fullname": {
                    "regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,
                    "alertText":"* 반드시 이름과 성을 입력해야 합니다."
                },
                "zip": {
                    "regex":/^\d{5}$|^\d{5}-\d{4}$/,
                    "alertText":"* 잘못된 zip 형식"
                },
                "integer": {
                    "regex": /^[\-\+]?\d+$/,
                    "alertText": "* 유효한 정수가 아닙니다."
                },
                "number": {
                    // Number, including positive, negative, and floating decimal. credit: orefalo
                    "regex": /^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,
                    "alertText": "* 잘못된 부동 소수점 숫자"
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
			 "alertText": "* 날짜가 잘못되었습니다. YYYY-MM-DD 형식이어야 합니다."
                },
                "ipv4": {
                    "regex": /^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,
                    "alertText": "* 잘못된 IP 주소"
                },
                "url": {
                    "regex": /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
                    "alertText": "* 잘못된 URL"
                },
                "onlyNumberSp": {
                    "regex": /^[0-9\ ]+$/,
                    "alertText": "* 숫자 만"
                },
                "onlyLetterSp": {
                    "regex": /^[a-zA-Z\ \u3300-\u9fff\uf900-\ufaff\u00C0-\u00ff\u0500-\u05FF']+$/,
                    "alertText": "* 글자만"
                },
				"onlyLetterAccentSp":{
                    "regex": /^[a-z\u00C0-\u017F\ ]+$/i,
                    "alertText": "* 문자만 가능(악센트 허용)"
                },
                "onlyLetterNumber": {
                    "regex": /^[0-9a-zA-Z]+$/,
                    "alertText": "* 특수문자 불가"
                },
                // --- CUSTOM RULES -- Those are specific to the demos, they can be removed or changed to your likings
				/* Change */
				"onlyLetterNumberSp": {
                    "regex": /^[0-9a-zA-Z\s-]+$/,
                    "alertText": "* 특수문자 불가"
                },
				/* end change */
                "ajaxUserCall": {
                    "url": "ajaxValidateFieldUser",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    "alertText": "* 이 사용자는 이미 사용 중입니다.",
                    "alertTextLoad": "* 확인 중입니다. 잠시만 기다려 주십시오."
                },
				"ajaxUserCallPhp": {
                    "url": "phpajax/ajaxValidateFieldUser.php",
                    // you may want to pass extra data on the ajax call
                    "extraData": "name=eric",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 이 사용자 이름은 사용 가능합니다.",
                    "alertText": "* 이 사용자는 이미 사용 중입니다.",
                    "alertTextLoad": "* 확인 중입니다. 잠시만 기다려 주십시오."
                },
                "ajaxNameCall": {
                    // remote json service location
                    "url": "ajaxValidateFieldName",
                    // error
                    "alertText": "* 이미 사용 중인 이름입니다.",
                    // if you provide an "alertTextOk", it will show as a green prompt when the field validates
                    "alertTextOk": "* 이 이름은 사용 가능합니다.",
                    // speaks by itself
                    "alertTextLoad": "* 확인 중입니다. 잠시만 기다려 주십시오."
                },
				 "ajaxNameCallPhp": {
	                    // remote json service location
	                    "url": "phpajax/ajaxValidateFieldName.php",
	                    // error
	                    "alertText": "* 이미 사용 중인 이름입니다.",
	                    // speaks by itself
	                    "alertTextLoad": "* 확인 중입니다. 잠시만 기다려 주십시오."
	                },
                "validate2fields": {
                    "alertText": "* HELLO를 입력해주세요."
                },
	            //tls warning:homegrown not fielded 
                "dateFormat":{
                    "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,
                    "alertText": "* 잘못된 날짜"
                },
                //tls warning:homegrown not fielded 
				"dateTimeFormat": {
	                "regex": /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,
                    "alertText": "* 잘못된 날짜 또는 날짜 형식",
                    "alertText2": "예상 형식: ",
                    "alertText3": "mm/dd/yyyy hh:mm:ss AM|PM 또는", 
                    "alertText4": "yyyy-mm-dd hh:mm:ss 오전|오후"
	            }
            };
            
        }
    };

    $.validationEngineLanguage.newLang();
    
})(jQuery);
