
var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));

$( function() {
    $( "#datepicker" ).datepicker();
  } );


var hours = ["9", "10", "11", "13", "14", "15", "16", "17"];
var savedActivity = document.getElementsByClassName("activity");
var save9 = document.getElementsByClassName("save9");
var rowtimeEl = document.getElementsByClassName("rowtime")
console.log(save9);


for (var i = 0; i < save9.length ; i++) {
    save9[i].addEventListener("click", function(event) {
        event.preventDefault();
        console.log("hi")
      
      var savedActivity9 = {
          comment: savedActivity.value}
          console.log(savedActivity);
      
      localStorage.setItem("savedActivity", JSON.stringify(savedActivity9));
      renderMessage9();
      });
    }
    function renderMessage9() {
      var newActivity = JSON.parse(localStorage.getItem("savedActivity"));
      console.log(newActivity.comment)
      if (newActivity !== null) {
        document.getElementById("activity").textContent = newActivity.comment
    }

  var currentTime = moment().format('HH');
 
  for (let i = 0; i < hours.length; i++) {
      rowtime = hours[i];
      function time() {
        moment().format('HH');
        if (hours[i] < currentTime){
          rowtimeEl.classList.add("class", "past");
          console.log(currentTime)
        } else if (hours[i] === currentTime){
          rowtimeEl[i].classList.add("class", "present");
        } else if (hours[i]  > currentTime) {
          rowtimeEl[i].classList.add("class", "future");
        }
      }
      time();  
  }
  

  //function time9() {
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
  //time9();
