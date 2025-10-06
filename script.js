(function () {
  let count = 0;
  const MIN_COUNT = 0;

  const display = document.getElementById("count-display");
  const incrementBtn = document.getElementById("increment-btn");
  const decrementBtn = document.getElementById("decrement-btn");
  const resetBtn = document.getElementById("reset-btn");
  const appContainer = document.getElementById("counter-app");

  const updateDisplay = () => {
    display.textContent = count;

    // Animation
    display.classList.add("count-animate");
    setTimeout(() => display.classList.remove("count-animate"), 300);

    // Disable decrement if count at minimum
    decrementBtn.disabled = count <= MIN_COUNT;

    // Dynamic color feedback
    if (count > 0) {
      display.style.color = "#00e0e0";
      display.style.textShadow = "0 0 20px rgba(0, 255, 255, 0.7)";
      appContainer.style.boxShadow = "0 6px 80px rgba(0, 255, 255, 0.2)";
    } else if (count < 0) {
      display.style.color = "#ff6666";
      display.style.textShadow = "0 0 20px rgba(255, 0, 0, 0.7)";
      appContainer.style.boxShadow = "0 6px 80px rgba(255, 0, 0, 0.2)";
    } else {
      display.style.color = "#ffffff";
      display.style.textShadow = "0 0 15px rgba(255, 255, 255, 0.5)";
      appContainer.style.boxShadow = "0 6px 80px rgba(160, 174, 192, 0.1)";
    }
  };

  const increment = () => {
    count++;
    updateDisplay();
  };

  const decrement = () => {
    if (count > MIN_COUNT) {
      count--;
      updateDisplay();
    }
  };

  const reset = () => {
    count = 0;
    updateDisplay();
  };

  incrementBtn.addEventListener("click", increment);
  decrementBtn.addEventListener("click", decrement);
  resetBtn.addEventListener("click", reset);

  updateDisplay();
})();
