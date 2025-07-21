document.querySelectorAll('[data-toggle]').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const card = toggle.parentElement;
    card.classList.toggle('active');
  });
});
