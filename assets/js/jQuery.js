var currentDisplayEl = document.getElementById("current-display");

// DISPLAYS CURRENT DATE AND TIME
function displayCurrent() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  currentDisplayEl.textContent = rightNow;
}

//CALL FUNCTION & SET TIME INTERVAL TO COUNT SECONDS
displayCurrent();
setInterval(displayCurrent, 1000);
