var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));

$( function() {
    $( "#datepicker" ).datepicker();
  } );


var hours = ["9", "10", "11", "13", "14", "15", "16", "17"];
var savedActivity = document.getElementById("activity");


for (var i = 0; i < hours.length ; i++) {
    save9.addEventListener("click", function(event) {
        event.preventDefault();
      
      var savedActivity9 = {
          comment: savedActivity.value}
          console.log(savedActivity);
      
      localStorage.setItem("savedActivity", JSON.stringify(savedActivity9));
      renderMessage9();
      });
      
      function renderMessage9() {
        var newActivity = JSON.parse(localStorage.getItem("savedActivity"));
        console.log(newActivity.comment)
        if (newActivity !== null) {
          document.getElementById("activity").textContent = newActivity.comment
        }
      };
    
}


save9.addEventListener("click", function(event) {
    event.preventDefault();
  
  var savedActivity9 = {
      comment: savedActivity.value}
      console.log(savedActivity);
  
  localStorage.setItem("savedActivity", JSON.stringify(savedActivity9));
  renderMessage9();
  });
  
  function renderMessage9() {
    var newActivity = JSON.parse(localStorage.getItem("savedActivity"));
    console.log(newActivity.comment)
    if (newActivity !== null) {
      document.getElementById("activity").textContent = newActivity.comment
    }
  };
  renderMessage9();
  
  
  var currentTime = moment().format('HH');
  
  function time9() {
    moment().format('HH');
    if (9 < currentTime){
      $("#9am").attr("class", "past");
      console.log(currentTime)
    } else if (9 === currentTime){
      $("#9am").attr("class", "present");
    } else if (9 > currentTime) {
      $("#9am").attr("class", "future");
    }
  }
  time9();