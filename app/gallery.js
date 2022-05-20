const gallery = document.querySelector('.images-wrapper')
let images = gallery.querySelectorAll('img')
const prev = document.querySelector('.button.prev')
const next = document.querySelector('.button.next')
let start = 0
//images.forEach((img) => (img.style.display = 'none'))
Number.prototype.mod = function (n) {
  return ((this % n) + n) % n
}

function lightRoom(img) {
  console.log(img.src)
}

function showImages(start) {
  gallery.innerHTML = ''
  //images.forEach((img) => (img.style.display = 'none'))
  images.forEach((img) => {
    img.addEventListener('click', lightRoom(img))
  })
  let leftWidth = window.innerWidth
  do {
    //images.forEach((img) => img.addEventListener('click', lightRoom(img)))
    let image = images[start]
    let height = image.height
    let width = image.width
    let ratio = gallery.offsetHeight / height
    width *= ratio
    //images.style.transform = `translateX(-${200}px)`
    //gallery.insertAdjacentHTML('beforeend', `<img class="gallery-img" src=${image.src}></img>`)
    gallery.appendChild(images[start])
    //images[start].style.display = 'block'
    //console.log('Showing: ' + start)
    start = (++start).mod(images.length)

    leftWidth -= width
  } while (leftWidth > 0)
}

prev.addEventListener('click', () => {
  start = (--start).mod(images.length)
  showImages(start)
})

next.addEventListener('click', () => {
  start = (++start).mod(images.length)
  showImages(start)
})

window.addEventListener('resize', () => {
  showImages(start)
})
showImages(start)
