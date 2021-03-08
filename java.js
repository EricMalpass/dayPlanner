var savedActivity = document.getElementById("activity");
var savedActivity10 = document.getElementById("activity10");
var savedActivity11 = document.getElementById("activity11");
var savedActivity12 = document.getElementById("activity12");
var savedActivity1 = document.getElementById("activity1");
var savedActivity2 = document.getElementById("activity2");
var savedActivity3 = document.getElementById("activity3");
var savedActivity4 = document.getElementById("activity4");
var savedActivity5 = document.getElementById("activity5");
var save9 = document.getElementById("save9");
var save10 = document.getElementById("save10");
var save11 = document.getElementById("save11");
var save12 = document.getElementById("save12");
var save1 = document.getElementById("save1");
var save2 = document.getElementById("save2");
var save3 = document.getElementById("save3");
var save4 = document.getElementById("save4");
var save5 = document.getElementById("save5");


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
 
  if (newActivity !== null) {
    document.getElementById("activity").textContent = newActivity.comment
  }
  console.log(newActivity.comment)
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

save10.addEventListener("click", function(event) {
  event.preventDefault();

var updateActivity10 = {
  comment: savedActivity10.value}
  console.log(savedActivity10);

localStorage.setItem("savedActivity10", JSON.stringify(updateActivity10));
renderMessage10();
});

function renderMessage10() {
var newActivity10 = JSON.parse(localStorage.getItem("savedActivity10"));
if (newActivity10 !== null) {
  document.getElementById("activity10").textContent = newActivity10.comment
}
};
renderMessage10();

function time10() {
  moment().format('HH');
  if (10 < currentTime){
    $("#10am").attr("class", "past");
    console.log(currentTime)
  } else if (10 === currentTime){
    $("#10am").attr("class", "present");
  } else if (9 > currentTime) {
    $("#10am").attr("class", "future");
  }
}
time10();

save11.addEventListener("click", function(event) {
    event.preventDefault();
  
  var updateActivity11 = {
    comment: savedActivity11.value}
    console.log(savedActivity11);
  
  localStorage.setItem("savedActivity11", JSON.stringify(updateActivity11));
  renderMessage11();
  });
  
  function renderMessage11() {
  var newActivity11 = JSON.parse(localStorage.getItem("savedActivity11"));
  if (newActivity11 !== null) {
    document.getElementById("activity11").textContent = newActivity11.comment
  }
  };
  renderMessage11();
  
  function time11() {
    moment().format('HH');
    if (11 < currentTime){
      $("#11am").attr("class", "past");
      console.log(currentTime)
    } else if (11 === currentTime){
      $("#11am").attr("class", "present");
    } else if (9 > currentTime) {
      $("#11am").attr("class", "future");
    }
  }
  time11();

  save12.addEventListener("click", function(event) {
    event.preventDefault();
  
  var updateActivity12 = {
    comment: savedActivity12.value}
    console.log(savedActivity12);
  
  localStorage.setItem("savedActivity12", JSON.stringify(updateActivity12));
  renderMessage12();
  });
  
  function renderMessage12() {
  var newActivity12 = JSON.parse(localStorage.getItem("savedActivity12"));
 
  if (newActivity12 !== null) {
    document.getElementById("activity12").textContent = newActivity12.comment
  }
  };
  renderMessage12();
  
  function time12() {
    moment().format('HH');
    if (12 < currentTime){
      $("#12").attr("class", "past");
      console.log(currentTime)
    } else if (12 === currentTime){
      $("#12").attr("class", "present");
    } else if (12 > currentTime) {
      $("#12").attr("class", "future");
    }
  }
  time12();


  save1.addEventListener("click", function(event) {
    event.preventDefault();
  
  var updateActivity1 = {
    comment: savedActivity1.value}
    console.log(savedActivity1);
  
  localStorage.setItem("savedActivity1", JSON.stringify(updateActivity1));
  renderMessage1();
  });
  
  function renderMessage1() {
  var newActivity1 = JSON.parse(localStorage.getItem("savedActivity1"));
  
  if (newActivity1 !== null) {
    document.getElementById("activity1").textContent = newActivity1.comment
  }
  };
  renderMessage1();
  
  function time1() {
    moment().format('HH');
    if (13 < currentTime){
      $("#1pm").attr("class", "past");
      console.log(currentTime)
    } else if (13 === currentTime){
      $("#1pm").attr("class", "present");
    } else if (13 > currentTime) {
      $("#1pm").attr("class", "future");
    }
  }
  time1();

  save2.addEventListener("click", function(event) {
    event.preventDefault();
  
  var updateActivity2 = {
    comment: savedActivity2.value}
    console.log(savedActivity2);
  
  localStorage.setItem("savedActivity2", JSON.stringify(updateActivity2));
  renderMessage1();
  });
  
  function renderMessage2() {
  var newActivity2 = JSON.parse(localStorage.getItem("savedActivity2"));
  
  if (newActivity2 !== null) {
    document.getElementById("activity2").textContent = newActivity2.comment
  }
  };
  renderMessage2();
  
  function time2() {
    moment().format('HH');
    if (14 < currentTime){
      $("#2pm").attr("class", "past");
      console.log(currentTime)
    } else if (14 === currentTime){
      $("#2pm").attr("class", "present");
    } else if (14 > currentTime) {
      $("#2pm").attr("class", "future");
    }
  }
  time2();

  save3.addEventListener("click", function(event) {
    event.preventDefault();
  
  var updateActivity3 = {
    comment: savedActivity3.value}
    console.log(savedActivity3);
  
  localStorage.setItem("savedActivity3", JSON.stringify(updateActivity3));
  renderMessage3();
  });
  
  function renderMessage3() {
  var newActivity3 = JSON.parse(localStorage.getItem("savedActivity3"));
  
  if (newActivity3 !== null) {
    document.getElementById("activity3").textContent = newActivity3.comment
  }
  };
  renderMessage3();
  
  function time3() {
    moment().format('HH');
    if (15 < currentTime){
      $("#3pm").attr("class", "past");
      console.log(currentTime)
    } else if (15 === currentTime){
      $("#3pm").attr("class", "present");
    } else if (15 > currentTime) {
      $("#3pm").attr("class", "future");
    }
  }
  time3();

  save4.addEventListener("click", function(event) {
    event.preventDefault();
  
  var updateActivity4 = {
    comment: savedActivity4.value}
    console.log(savedActivity4);
  
  localStorage.setItem("savedActivity4", JSON.stringify(updateActivity4));
  renderMessage4();
  });
  
  function renderMessage4() {
  var newActivity4 = JSON.parse(localStorage.getItem("savedActivity4"));
  
  if (newActivity4 !== null) {
    document.getElementById("activity4").textContent = newActivity4.comment
  }

  };
  renderMessage4();
  
  function time4() {
    moment().format('HH');
    if (16 < currentTime){
      $("#4pm").attr("class", "past");
      console.log(currentTime)
    } else if (16 === currentTime){
      $("#4pm").attr("class", "present");
    } else if (16 > currentTime) {
      $("#4pm").attr("class", "future");
    }
  }
  time4();

  save5.addEventListener("click", function(event) {
    event.preventDefault();
  
  var updateActivity5 = {
    comment: savedActivity5.value}
    console.log(savedActivity5);
  
  localStorage.setItem("savedActivity5", JSON.stringify(updateActivity5));
  renderMessage5();
  });
  
  function renderMessage5() {
  var newActivity5 = JSON.parse(localStorage.getItem("savedActivity5"));
  
  if (newActivity5 !== null) {
    document.getElementById("activity5").textContent = newActivity5.comment
  }
  };
  renderMessage5();
  
  function time5() {
    moment().format('HH');
    if (17 < currentTime){
      $("#5pm").attr("class", "past");
      console.log(currentTime)
    } else if (17 === currentTime){
      $("#5pm").attr("class", "present");
    } else if (17 > currentTime) {
      $("#5pm").attr("class", "future");
    }
  }
  time5();

