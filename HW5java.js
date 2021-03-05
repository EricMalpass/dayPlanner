var savedActivity = document.getElementById("activity");
var save9 = document.getElementById("save9");

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

save9.addEventListener("click", function(event) {
  event.preventDefault();

var savedActivity9 = {
    comment: savedActivity.value}
    console.log(savedActivity);

localStorage.setItem("savedActivity", JSON.stringify(savedActivity9));
renderMessage();
});

function renderMessage() {
  var newActivity = JSON.parse(localStorage.getItem("savedActivity"));
  console.log(newActivity.comment)
  if (newActivity !== null) {
    document.getElementById("activity").textContent = newActivity.comment
  }
};
renderMessage();

/*
var activityEl = $('#activity-input');
var activityName = $('activityName');

function saveSubmit(event) {
  event.preventDefault();
  var activityName = activityEl.val().trim();
}

activityEl.on('save', saveSubmit);
*/
var currentTime = moment().format('HH');

function time() {
  moment().format('HH');
  if (9 < currentTime){
    $("#9am").attr("class", "past")
  }
}
time();
console.log(currentTime);