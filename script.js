const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let scale = 1;

yesBtn.addEventListener("click", () => {
  scale += 0.25;
  yesBtn.style.transform = `scale(${scale})`;

  const yesRect = yesBtn.getBoundingClientRect();
  const noRect = noBtn.getBoundingClientRect();

  // If YES overlaps or gets close, move NO away
  if (
    yesRect.right >= noRect.left - 10 ||
    yesRect.width > 250
  ) {
    const randomX = Math.random() * 120 - 60;
    const randomY = Math.random() * 120 - 60;

    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
  }

  // Optional: hide NO if YES becomes massive
  if (scale > 3.5) {
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
  }
});

