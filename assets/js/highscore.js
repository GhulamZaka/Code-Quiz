var clearBtn = document.getElementById("clear");

// Clear High Scores
clearBtn.addEventListener("click", function() {
    localStorage.clear();
})

// retrieve data from local storage.