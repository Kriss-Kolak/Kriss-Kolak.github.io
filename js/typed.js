
const typed = new Typed("#typed-output", {
    strings: [
      "> Detecting repetitive tasks...",
      "> Injecting automation...",
      "> Eliminating boredom...",
      "> Done. You're free now 🦾",
        "> Running simulation...",
         "> Exporting results...",
         "> Automating report generation...",
        "> Coffee time ☕"
    ],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    cursorChar: '_',
  });

function animatedCounter(id, maxValue, increment, interval) {
  let current = 0;
  const el = document.getElementById(id);
  const update = () => {
    current += increment;
    if (current > maxValue) current = maxValue;
    el.innerText = current;
    if (current < maxValue) {
      setTimeout(update, interval);
    }
  };
  update();
}

document.addEventListener("DOMContentLoaded", () => {
  animatedCounter("counter-hours", 137, 1, 50);      
  animatedCounter("counter-clicks", 8721, 53, 30);   
  animatedCounter("counter-brain", 42069, 210, 10);  
});