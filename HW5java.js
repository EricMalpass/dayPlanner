var savedActivity = document.getElementById("activity");
var savedActivity10 = document.getElementById("activity10");
var save9 = document.getElementById("save9");
var save10 = document.getElementById("save10");

var today = moment();
$("#today").text(today.format("MMM Do, YYYY"));

$( function() {
    $( "#datepicker" ).datepicker();
  } );

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

function time() {
  moment().format('HH');
  if (9 < currentTime){
    $("#9am").attr("class", "past")
    console.log(currentTime);
  }
}
time();

save10.addEventListener("click", function(event) {
  event.preventDefault();

var savedActivity10 = {
  comment: savedActivity.value}
  console.log(savedActivity10);

localStorage.setItem("savedActivity10", JSON.stringify(savedActivity10));
renderMessage10();
});

function renderMessage10() {
var newActivity10 = JSON.parse(localStorage.getItem("savedActivity10"));
console.log(newActivity10.comment)
if (newActivity10 !== null) {
  document.getElementById("activity10").textContent = newActivity10.comment
}
};
renderMessage10();

function time() {
  moment().format('HH');
  if (10 < currentTime){
    $("#10am").attr("class", "past")
    console.log(currentTime);
  }
}
time();
