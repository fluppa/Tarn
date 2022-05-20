let nav = document.querySelector('nav')
let hamburger = document.querySelector('.hamburger')
let body = document.querySelector('body')
let cover = document.querySelector('.cover')
let scroll = 0
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('switched-on')
  nav.classList.toggle('switched-on')
  body.classList.toggle('switched-on')
  cover.classList.toggle('switched-on')
})
