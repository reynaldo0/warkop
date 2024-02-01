// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// Klik di luar elemen
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');
const sc = document.querySelector('#shopping-cart-button');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }

  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }

  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// Modal Box
function setupModal(itemDetailModal, itemDetailButtons) {
  itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal.style.display = 'flex';
      e.preventDefault();
    };
  });

  const closeIcon = itemDetailModal.querySelector('.close-icon');
  closeIcon.onclick = (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
  };

  window.addEventListener('click', (e) => {
    if (e.target === itemDetailModal) {
      itemDetailModal.style.display = 'none';
    }
  });
}

// Modal ke 1
const itemDetailModal1 = document.querySelector('#item-detail-modal1');
const itemDetailButtons1 = document.querySelectorAll('.item-detail-button1');
setupModal(itemDetailModal1, itemDetailButtons1);

// Modal ke 2
const itemDetailModal2 = document.querySelector('#item-detail-modal2');
const itemDetailButtons2 = document.querySelectorAll('.item-detail-button2');
setupModal(itemDetailModal2, itemDetailButtons2);

// Modal ke 3
const itemDetailModal3 = document.querySelector('#item-detail-modal3');
const itemDetailButtons3 = document.querySelectorAll('.item-detail-button3');
setupModal(itemDetailModal3, itemDetailButtons3);

// Modal ke 4
const itemDetailModal4 = document.querySelector('#item-detail-modal4');
const itemDetailButtons4 = document.querySelectorAll('.item-detail-button4');
setupModal(itemDetailModal4, itemDetailButtons4);
