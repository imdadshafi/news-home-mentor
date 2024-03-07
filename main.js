import './app.scss'

const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('nav')
const navWrap = document.querySelector('.nav-wrapper')
if (menuIcon) {
  menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('opened')
    nav.classList.toggle('active')
  })
}
nav.addEventListener('click', e => {
  if (e.target.contains(nav)) {
    menuIcon.classList.remove('opened')
    nav.classList.remove('active')
  }
})
