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

datepicker.regional[ "ur" ] = {
	closeText: "ہو گیا",
	prevText: "پچھلا",
	nextText: "اگلے",
	currentText: "آج",
	monthNames: [ "جنوری","فروری","مارچ","اپریل","مئی","جون",
	"جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر" ],
	monthNamesShort: [ "جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون",
	"جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
	dayNames: ["اتوار سوموار منگل بدھ جمعرات جمعہ ہفتہ" ],
	dayNamesShort: [ "سورج", "سوموار", "منگل", "بدھ", "جمع", "جمعہ", "ہفتہ" ],
	dayNamesMin: [ "سورج", "سوموار", "منگل", "بدھ", "جمع", "جمعہ", "ہفتہ" ],
	weekHeader: "Wk",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional[ "ur" ] );

return datepicker.regional[ "ur" ];

} ) );
