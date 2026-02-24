// ===== Matrix Background =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "47MXM01ABCDEFGHIJKLMNOPQRSTUVWXYZ#$%";
const fontSize = 18;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0,0,0,0.15)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#ff0000";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random() * chars.length)];
    ctx.fillText(text, i * fontSize, y * fontSize);
    drops[i] = y * fontSize > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
  });
}

setInterval(drawMatrix, 50);

// ===== Scramble Effect =====
function scrambleText(element, finalText, duration) {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let iterations = 0;

  element.style.opacity = 1;

  const interval = setInterval(() => {
    element.innerText = finalText
      .split("")
      .map((char, i) => {
        if (i < iterations) return finalText[i];
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join("");

    if (iterations >= finalText.length) {
      clearInterval(interval);
    }

    iterations += 1 / 3;
  }, 50);

  setTimeout(() => element.style.opacity = 0, duration);
}

// ===== Timeline =====
setTimeout(() => {
  scrambleText(document.getElementById("scramble1"), "X9A4M1Z7MXM47", 3000);
}, 2000);

setTimeout(() => {
  document.getElementById("mxm").classList.add("show");
}, 5000);

setTimeout(() => {
  scrambleText(document.getElementById("scramble2"), "H1KI9M0HOHXWRUHXGF??", 5000);
}, 7000);

setTimeout(() => {
  document.getElementById("hello").classList.add("show");
}, 11900);

// ===== Fullscreen =====
function goFull() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  }
}

// ===== Redirect =====
setTimeout(() => {
  window.location.href = "puzzle1/puzzle1.htm";
}, 16000);
