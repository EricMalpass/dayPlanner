var savedActivity = document.getElementById("activity");
var saveButton = document.getElementById("save");

var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));

$( function() {
    $( "#datepicker" ).datepicker();
  } );
/*
document.getElementById("myBtn").addEventListener("click", savebtn());

function saveButton() {
    var x = document.getElementById("activity").value;
    document.getElementById("savedActivity").innerHTML = x;
}
*/
saveButton.addEventListener("click", function(event) {
  event.preventDefault();

var savedActivity = {
    comment: comment.value.trim()

localStorage.setItem("savedActivity", JSON.stringify(savedActivity));
renderMessage();
}});

function renderMessage() {
  var newActivity = JSON.parse(localStorage.getItem("savedActivity"));
  if (newActivity !== null) {
    document.querySelector(".message").textContent = newActivity
  }
}


