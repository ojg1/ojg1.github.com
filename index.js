
document.addEventListener("DOMContentLoaded", function() {

    const timerText = document.getElementById("timertext");
    let holdTime = null;
    let timeRunning = false;
    let currentTime = 0;
    let interval = null;

    let debounce = false;
    let timeList = {};


    document.addEventListener("keydown", function(event) {

        if (event.code === "Space" && debounce === false) {
            if (timeRunning === false) {
                debounce = true; 
                timerText.style.color = "red";

                holdTime = setTimeout(() => {
                    timerText.style.color = "green";
                    holdTime = null;
                },300);


            } else {
                timerText.style.color = "black"
                timeRunning = false
            };


        };

    });

    document.addEventListener("keyup", function(event) {
        if (event.code === "Space") {


            if (timerText.style.color === "green") {
                timeRunning = true;
                


            } else {
                if (holdTime !== null) {
                    clearTimeout(holdTime);
                    holdTime = null;
                };
                // if (timerText.style.color === "green") {
                //   console.log("Green!");  
                // };

                debounce = false;
                timerText.style.color = "black";
            };
            
        } 

    });
});
