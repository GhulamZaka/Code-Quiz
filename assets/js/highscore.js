var clearBtn = document.getElementById("clear");

// Clear High Scores
clearBtn.addEventListener("click", function() {
    localStorage.clear();
})

// retrieve data from local storage.

var gmz = document.getElementById("showhighscore");


gmz.innerHTML = localStorage.getItem("contactInfo");
document.getElementById("timeLeft").innerHTML = localStorage.getItem("timeLeft");




