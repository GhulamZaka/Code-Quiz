var clearBtn = document.getElementById("clear");

// Clear High Scores
clearBtn.addEventListener("click", function() {
    localStorage.clear();
})

// retrieve data from local storage.

document.getElementById("showhighscore").innerHTML = localStorage.getItem("contactInfo");
document.getElementById("showhighscore").innerHTML = localStorage.getItem("timeLeft");