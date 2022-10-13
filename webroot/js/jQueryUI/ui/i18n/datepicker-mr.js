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

datepicker.regional[ "mr" ] = {
	closeText: "झाले",
	prevText: "मागील",
	nextText: "पुढे",
	currentText: "आज",
	monthNames: [ "जानेवारी", "फेब्रुवारी", "मार्च", "एप्रिल", "मे", "जून",
	"जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टोबर", "नोव्हेंबर", "डिसेंबर" ],
	monthNamesShort: [ "जाने", "फेब्रु", "मार", "एप्रिल", "मे", "जून",
	"जुलै", "ऑगस्ट", "सप्टेंबर", "ऑक्टो", "नोव्हेंबर", "डिसेंबर" ],
	dayNames: [ "रविवार सोमवार मंगळवार बुधवार गुरुवार शुक्रवार शनिवार"],
	dayNamesShort: [ "रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि" ],
	dayNamesMin: ["सु", "मो", "तू", "आम्ही", "थ", "फार", "सा"],
	weekHeader: "Wk",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional[ "mr" ] );

return datepicker.regional[ "mr" ];

} ) );
