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

datepicker.regional[ "bn" ] = {
	closeText: "সম্পন্ন",
	prevText: "পূর্ববর্তী",
	nextText: "পরবর্তী",
	currentText: "আজ",
	monthNames: [ "জানুয়ারি ফেব্রুয়ারি মার্চ এপ্রিল মে জুন",
	"জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
	monthNamesShort: [ "জানুয়ারি", "ফেব্রুয়ারি", "মার", "এপ্রিল", "মে", "জুন",
	"জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"],
	dayNames: [ "রবিবার সোমবার মঙ্গলবার বুধবার বৃহস্পতিবার শুক্রবার শনিবার"],
	dayNamesShort: ["রবি", "সোম", "মঙ্গল", "বুধ", "বৃহস্পতি", "শুক্র", "শনি" ],
	dayNamesMin: [ "সু", "মো", "তু", "আমরা", "থ", "ফর", "সা" ],
	weekHeader: "Wk",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional[ "bn" ] );

return datepicker.regional[ "bn" ];

} ) );
