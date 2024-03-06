import './style.scss'

const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('nav')
if (menuIcon) {
  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('opened');
    nav.classList.toggle('active')
  })
}
