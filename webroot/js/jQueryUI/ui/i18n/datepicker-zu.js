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

datepicker.regional[ "zu" ] = {
	closeText: "Done",
	prevText: "Prev",
	nextText: "Next",
	currentText: "Today",
	monthNames: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	monthNamesShort: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
	dayNames: [ "Sunday_Monday_Tuesday_Lwesithathu_Lwesine_Friday_Saturday" ],
	dayNamesShort: [ "Ilanga", "Mon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn" ],
	dayNamesMin: [ "Ilanga", "Mon", "Mars", "Mercury", "Jupiter", "Venus", "Saturn"],
	weekHeader: "Wk",
	dateFormat: "dd/mm/yy",
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: "" };
datepicker.setDefaults( datepicker.regional[ "zu" ] );

return datepicker.regional[ "zu" ];

} ) );
