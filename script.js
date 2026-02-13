const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let sizeIncrement = 1.1;  // Growth scale
let clickCount = 0;

yesBtn.addEventListener("click", () => {
    clickCount++;
  
    // Increase yes button size
    let style = window.getComputedStyle(yesBtn);
    let width = parseFloat(style.width);
    let height = parseFloat(style.height);

    yesBtn.style.width  = (width * sizeIncrement) + "px";
    yesBtn.style.height = (height * sizeIncrement) + "px";

    // Move NO button away a bit
    if (noBtn) {
        noBtn.style.marginLeft = `${clickCount * 15}px`;
    }

    // Hide NO when YES is big
    if (width > 300) {
        noBtn.style.display = "none";
    }
});
