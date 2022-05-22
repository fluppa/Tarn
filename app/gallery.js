const gallery = document.querySelector('.images-wrapper')
let images = gallery.querySelectorAll('img')
const prev = document.querySelector('.button.prev')
const next = document.querySelector('.button.next')
let start = 0
console.log('loaded')
//images.forEach((img) => (img.style.display = 'none'))
Number.prototype.mod = function (n) {
  return ((this % n) + n) % n
}

function loadLightBox() {
  var script = document.createElement('script')
  script.setAttribute('id', 'lightbox-script')
  script.src = 'app/fslightbox/fslightbox.js'
  var head = document.getElementsByTagName('head')[0]
  if (document.querySelector('#lightbox-script')) {
    document.querySelector('#lightbox-script').remove()
  }

  head.appendChild(script)
  if (document.querySelector('.fslightbox-styles')) {
    document.querySelector('.fslightbox-styles').remove()
  }
  return false
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
    gallery.insertAdjacentHTML(
      'beforeend',
      `<a data-fslightbox="gallery" href=${image.src}><img class="gallery-img" src=${image.src}></img></a>`
    )

    if (window.innerWidth < 960) {
      break
    }
    //gallery.appendChild(images[start])
    //images[start].style.display = 'block'
    //console.log('Showing: ' + start)
    start = (++start).mod(images.length)

    leftWidth -= width
  } while (leftWidth > 0)
  loadLightBox()
}

prev.addEventListener('click', () => {
  console.log('click')
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
