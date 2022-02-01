var currentDisplayEl = document.getElementById("current-display");
var savedEvent = document.getElementsByClassName("description");

// DISPLAYS CURRENT DATE AND TIME
function displayCurrent() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  currentDisplayEl.textContent = rightNow;
}

//CALL FUNCTION & SET TIME INTERVAL TO COUNT SECONDS
displayCurrent();
setInterval(displayCurrent, 1000);

//SAVE EVENT TO LOCAL STORAGE & PREVENT DEFAULT RESET
$(".saveBtn").on("click", function (e) {
  console.log(e.currentTarget.className);
//   $(e.target).parent().find("input").val();
//   localStorage.setItem("event", savedEvent);
});

//ON SAVE OF EVENT COLOR CODE BASED UPON CURRENT TIME
