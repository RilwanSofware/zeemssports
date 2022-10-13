/* English/Australia initialisation for the jQuery UI date picker plugin. */
/* Based on the en-GB initialisation. */
( function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( [ "../widgets/datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}( function( datepicker ) {

datepicker.regional[ "te" ] = {
	closeText: "పూర్తి",
	prevText: "మునుపటి",
	nextText: "తరువాత",
	currentText: "ఈరోజు",
	monthNames: [ "జనవరి", "ఫిబ్రవరి", "మార్చి", "ఏప్రిల్", "మే", "జూన్",
	"జూలై", "ఆగస్టు", "సెప్టెంబర్", "అక్టోబర్", "నవంబర్", "డిసెంబర్"],
	monthNamesShort: [ "జనవరి", "ఫిబ్రవరి", "మార్", "ఏప్రి", "మే", "జూన్",
	"జూల్", "ఆగస్ట్", "సెప్టెం", "అక్టోబర్", "నవంబర్", "డిసెంబరు"],
	dayNames: [ "ఆదివారము సోమవారము మంగళవారము బుధవారము గురువారము శుక్రవారము శనివారము"],
	dayNamesShort: [ "సూర్యుడు", "సోమ", "మంగళవారం", "బుధ", "గురు", "శుక్ర", "శని"],
	dayNamesMin: [ "సు", "మో", "తు", "మేము", "త", "Fr", "సా"],
	weekHeader: "Wk",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional[ "te" ] );

return datepicker.regional[ "te" ];

} ) );
