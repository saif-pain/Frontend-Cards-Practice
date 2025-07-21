const bio = document.getElementById("bio");
const charCount = document.getElementById("charCount");
const limit = 150;

bio.addEventListener("input", () => {
  const len = bio.value.length;
  charCount.textContent = `${len} / ${limit}`;

  charCount.classList.remove("warning", "danger");

  if (len > 120 && len < limit) {
    charCount.classList.add("warning");
  } else if (len >= limit) {
    charCount.classList.add("danger");
  }
});
