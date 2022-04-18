var clearBtn = document.getElementById("clear");

// Clear High Scores
clearBtn.addEventListener("click", function() {
    localStorage.clear();

});

// retrieve data from local storage.

var contactInfo = document.getElementById("showhighscore");
var time = document.getElementById("timeLeft");

contactInfo.innerHTML = JSON.parse(localStorage.getItem("contactInfo"));
time.innerHTML = JSON.parse(localStorage.getItem("timeLeft"));

  