const button = document.querySelector('.language-button')
const pl = document.querySelectorAll('.language-text')[0]
const en = document.querySelectorAll('.language-text')[1]
const slider = document.querySelector('.slider')

slider.addEventListener('click', () => {
  slider.classList.toggle('english')
  en.classList.toggle('active')
  pl.classList.toggle('active')
})
