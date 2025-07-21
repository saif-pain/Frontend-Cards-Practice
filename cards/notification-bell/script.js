const bell = document.getElementById("bell");
const dropdown = document.getElementById("dropdown");

bell.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});
