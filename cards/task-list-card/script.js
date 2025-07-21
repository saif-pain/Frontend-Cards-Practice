const checkboxes = document.querySelectorAll('.task-list input[type="checkbox"]');
const countDisplay = document.getElementById('completed-count');

function updateCount() {
  let count = 0;

  checkboxes.forEach((checkbox) => {
    const li = checkbox.closest('li');
    if (checkbox.checked) {
      li.classList.add('completed');
      count++;
    } else {
      li.classList.remove('completed');
    }
  });

  countDisplay.textContent = count;
}

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('change', updateCount);
});
