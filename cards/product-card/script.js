const addToCartBtn = document.getElementById('addToCartBtn');
const successMessage = document.getElementById('successMessage');

addToCartBtn.addEventListener('click', () => {
  successMessage.classList.remove('hidden');

  setTimeout(() => {
    successMessage.classList.add('hidden');
  }, 2000);
});
