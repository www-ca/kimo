// ===== Typing Message =====
const letter = document.getElementById("letter");
const message = "hint:the code is not in this site";

let i = 0;
function typeMessage() {
  if(i < message.length){
    letter.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeMessage, 50);
  }
}
typeMessage();

// ===== Puzzle =====
const correctCode = "WHITE_CHOCOLATE_ARE_BETTER"; // الكود الجديد
const input = document.getElementById("codeInput");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {
  const value = input.value.trim().toUpperCase();

  if(value === correctCode){
    alert("🎉 Correct! Moving to your reward...");
    window.location.href = "puzzle2.htm";
  } else {
    alert("NAH thats wrong 😅");
    input.value = "";
  }
});

// ===== زرار لموقع آخر =====
document.getElementById("nextPageBtn").addEventListener("click", () => {
  window.location.href = "https://mxmai.lovable.app/"; // حط أي رابط تحبه
});
