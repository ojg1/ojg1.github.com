document.addEventListener("DOMContentLoaded", function () {

    const timerText = document.getElementById("timertext");
    let holdTime = null;
    let timeRunning = false;
    let startTime = 0;
    let animationFrame = null;

    let debounce = false;
    let timeList = {};

    function updateTime() {
        if (!timeRunning) return;
        const elapsed = (performance.now() - startTime) / 1000;
        timerText.textContent = elapsed.toFixed(3);
        animationFrame = requestAnimationFrame(updateTime);
    }

    document.addEventListener("keydown", function (event) {
        if (event.code === "Space" && debounce === false) {
            if (timeRunning === false) {
                debounce = true;
                timerText.style.color = "red";

                holdTime = setTimeout(() => {
                    timerText.style.color = "green";
                    holdTime = null;
                }, 300);
            } else {
                const stopTime = performance.now();
                timeRunning = false;
                cancelAnimationFrame(animationFrame);
                const finalTime = (stopTime - startTime) / 1000;
                timerText.textContent = finalTime.toFixed(3);
                timerText.style.color = "black";
            }
        }
    });

    document.addEventListener("keyup", function (event) {
        if (event.code === "Space") {

            if (timerText.style.color === "green" && timeRunning === false) {
                timeRunning = true;
                startTime = performance.now();
                timerText.style.color = "black";
                updateTime();
            } else {
                if (holdTime !== null) {
                    clearTimeout(holdTime);
                    holdTime = null;
                }
                timerText.style.color = "black";
            }

            debounce = false;
        }
    });
});
