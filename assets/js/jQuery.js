var currentDisplayEl = document.getElementById("current-display");

function displayCurrent() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  console.log(moment().format("MMM DD, YYYY [at] hh:mm:ss a"));
  console.log("linked");
  currentDisplayEl.textContent(rightNow);

  displayCurrent();
}
