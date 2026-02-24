const video = document.getElementById("rewardVideo");
const nextBtn = document.getElementById("nextBtn");

// لما الفيديو يخلص يفتح الصفحة اللي بعدها
video.addEventListener("ended", () => {
  window.location.href = "reward2.html"; // غير الاسم براحتك
});

// زرار يدوي
nextBtn.addEventListener("click", () => {
  window.location.href = "reward2.html";
});
