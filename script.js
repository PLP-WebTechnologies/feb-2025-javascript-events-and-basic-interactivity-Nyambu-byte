// 1. Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "lightblue";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "white";
});

document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(`You pressed: ${e.key}`);
});

document.getElementById("secretAction").addEventListener("dblclick", () => {
  alert("Secret double-click unlocked! 🎉");
});

// 2. Interactive Elements
document.getElementById("magicBtn").addEventListener("click", function () {
  this.innerText = "Ta-da! 🎩✨";
  this.style.backgroundColor = "gold";
});

// Slideshow
const images = [
  "https://via.placeholder.com/300x200?text=Image+1",
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+3"
];
let current = 0;

setInterval(() => {
  current = (current + 1) % images.length;
  document.getElementById("slideshow").src = images[current];
}, 3000);

// Tabs
function showTab(tabId) {
  document.querySelectorAll(".content").forEach(el => el.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}

// 3. Form Validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = form.email.value;
  const password = form.password.value;

  if (!email.includes("@")) {
    feedback.innerText = "Invalid email format!";
  } else if (password.length < 8) {
    feedback.innerText = "Password must be at least 8 characters!";
  } else {
    feedback.style.color = "green";
    feedback.innerText = "You're good to go! ✅";
  }
});

form.password.addEventListener("input", () => {
  const pwd = form.password.value;
  feedback.style.color = pwd.length < 8 ? "red" : "green";
  feedback.innerText = pwd.length < 8 ? "Password too short!" : "Looking good! ✅";
});
