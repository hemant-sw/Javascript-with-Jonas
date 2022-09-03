'use strict';

const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnCLoseModal = document.querySelector('.close-modal');

const btnOpenModal = document.querySelectorAll('.show-modal');

console.log(btnOpenModal);

const openBtn = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeBtn = function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openBtn);
}

btnCLoseModal.addEventListener('click', closeBtn);
overlay.addEventListener('click', closeBtn);

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape') {
    closeBtn();
  }
});
