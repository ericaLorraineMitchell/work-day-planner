var currentDisplayEl = document.getElementById("current-display");

// DISPLAYS CURRENT DATE AND TIME
function displayCurrent() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  currentDisplayEl.textContent = rightNow;
}

//CALL FUNCTION & SET TIME INTERVAL TO COUNT SECONDS
displayCurrent();
setInterval(displayCurrent, 1000);

//SAVE EVENT TO LOCAL STORAGE
$(".saveBtn").on("click", function () {
  // $(this).parent().find("input").val();
  var inputId = $(this).parent().find(".description").attr("id");
  var inputValue = $("#" + inputId).val();

  localStorage.setItem(inputId, inputValue);
});

//PREVENT INPUT CLEAR ON PAGE REFRESH
function showTasks() {
  var taskEl = $(".description");
  taskEl.each(function (i) {
    // console.log(i);
    var taskKey = $(this).attr("id");
    var getTask = localStorage.getItem(taskKey);
    $(this).val(getTask);
  });
}
showTasks();

// ON SAVE OF EVENT COLOR CODE BASED UPON CURRENT TIME
function colorTime() {
  var taskEl = $(".description");
  var currentHour = moment().hour();
  // console.log(taskEl);
  taskEl.each(function (i) {
    // console.log(i);
    var currentInput = $(this);
    var taskKey = parseInt($(this).attr("id"));
    if (taskKey > currentHour) {
      currentInput.addClass("future");
    } else if (taskKey === currentHour) {
      currentInput.addClass("present");
    } else {
      currentInput.addClass("past");
    }
  });
}
colorTime();
