 // Initialize time variables for the stopwatch
 let [hours, minutes, seconds, milliSeconds] = [0, 0, 0, 0];
    let timerRef = document.getElementById("display");
    let interval = null;
    let running = false;
    let toggleBtn = document.getElementById("toggle");

    // Function to update the stopwatch display
    function updateDisplay() {
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      let ms = milliSeconds.toString().padStart(3, "0");
      timerRef.innerHTML = `${h}:${m}:${s} ${ms}`;
    }

    //Function that runs every interval tick to update time
    function stopwatch() {
      milliSeconds++;
      if (milliSeconds == 1000) {
        milliSeconds = 0;
        seconds++;
      }
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }

    // Event listener for Start/Stop toggle button
    toggleBtn.addEventListener("click", () => {
      if (!running) {
        interval = setInterval(stopwatch, 10); // Start the stopwatch (interval every 10ms for smoother performance)
        toggleBtn.textContent = "Stop";
        toggleBtn.style.background = "#f44336"; // change to red
        running = true;
      } else {
        clearInterval(interval); // Stop the stopwatch
        toggleBtn.textContent = "Start"; // Change button text & style back to "Start"
        toggleBtn.style.background = "#4CAF50"; // back to green
        running = false;
      }
    });

   
    // Event listener for Reset/Clear button
    document.getElementById("clear").addEventListener("click", () => {
      clearInterval(interval);
      [hours, minutes, seconds, milliSeconds] = [0, 0, 0, 0]; // Reset all time values back to 0
      updateDisplay();
      toggleBtn.textContent = "Start"; // Reset button text and style to "Start"
      toggleBtn.style.background = "#4CAF50";
      running = false;
    });