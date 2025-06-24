
function toggleChat() {
  const chatBox = document.getElementById("chatBox");
  const sound = document.getElementById("bloomieSound");
  chatBox.style.display = chatBox.style.display === "none" ? "block" : "none";
  sound.play();
}
