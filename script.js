'use strict';

const menuBtn = document.querySelector('.btn-menu');

menuBtn.addEventListener('click', function (e) {
  const menu = document.querySelector('.nav');
  const click = e.target.closest('.btn-menu');
  click.classList.toggle('active');
  menu.classList.toggle('active');
});
