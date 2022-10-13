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

datepicker.regional[ "kn" ] = {
	closeText: "ಮುಗಿದಿದೆ",
	prevText: "ಹಿಂದಿನ",
	nextText: "ಮುಂದೆ",
	currentText: "ಇಂದು",
	monthNames: [ "ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್",
	"ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್ಟೆಂಬರ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂಬರ್", "ಡಿಸೆಂಬರ್" ],
	monthNamesShort: [ "ಜನವರಿ", "ಫೆಬ್ರವರಿ", "ಮಾರ್ಚ್", "ಏಪ್ರಿಲ್", "ಮೇ", "ಜೂನ್",
	"ಜುಲೈ", "ಆಗಸ್ಟ್", "ಸೆಪ್", "ಅಕ್ಟೋಬರ್", "ನವೆಂ", "ಡಿಸೆಂಬರ್" ],
	dayNames: [ "ಭಾನುವಾರ ಸೋಮವಾರ ಮಂಗಳವಾರ ಬುಧವಾರ ಗುರುವಾರ ಶುಕ್ರವಾರ ಶನಿವಾರ" ],
	dayNamesShort: ["ಸೂರ್ಯ", "ಸೋಮ", "ಮಂಗಳ", "ಬುಧ", "ಗುರು", "ಶುಕ್ರ", "ಶನಿ" ],
	dayNamesMin: [ "ಸು", "ಮೊ", "ತು", "ನಾವು", "ತ", "ಫ್ರ್", "ಸಾ" ],
	weekHeader: "Wk",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional[ "kn" ] );

return datepicker.regional[ "kn" ];

} ) );
