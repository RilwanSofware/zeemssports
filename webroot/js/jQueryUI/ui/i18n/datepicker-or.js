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

datepicker.regional[ "or" ] = {
	closeText: "ସମାପ୍ତ",
	prevText: "ପୂର୍ବ",
	nextText: "ପରବର୍ତ୍ତୀ",
	currentText: "ଆଜି |",
	monthNames: [ "ଜାନୁଆରୀ", "ଫେବୃଆରୀ", "ମାର୍ଚ୍ଚ", "ଏପ୍ରିଲ୍", "ମେ", "ଜୁନ୍",
	"ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର" ],
	monthNamesShort: [ "ଜନ", "ଫେବୃଆରୀ", "ମାର୍", "ଏପ୍ରିଲ୍", "ମେ", "ଜୁନ୍",
	"ଜୁଲାଇ", "ଅଗଷ୍ଟ", "ସେପ୍ଟେମ୍ବର", "ଅକ୍ଟୋବର", "ନଭେମ୍ବର", "ଡିସେମ୍ବର" ],
	dayNames: [ "ରବିବାର", "ସୋମବାର", "ମଙ୍ଗଳବାର", "ବୁଧବାର", "ଗୁରୁବାର", "ଶୁକ୍ରବାର", "ଶନିବାର" ],
	dayNamesShort: [ "ସୂର୍ଯ୍ୟ", "ସୋମ", "ମଙ୍ଗଳ", "ବୁଧ", "ଶୁକ୍ର", "ଶୁକ୍ର", "ଶନି" ],
	dayNamesMin: [ "ସୁ", "ମୋ", "ତୁ", "ଆମେ", "ଥ", "ଫ୍ର", "ସା" ],
	weekHeader: "Wk",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional[ "or" ] );

return datepicker.regional[ "or" ];

} ) );
