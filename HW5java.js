var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));

$( function() {
    $( "#datepicker" ).datepicker();
  } );