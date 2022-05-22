let images = document.querySelectorAll('.gallery-img')

function openLightBox(image) {
  console.log('adding light')
  lightbox = `<div class=lightbox-wrapper></div>`
  document.getElementsByTagName('body')

  body.append(lightbox)
}

for (var i = 0; i < images.length; i++) {
  console.log('test')
  images[i].addEventListener('click', () => {
    openLightBox(images[i])
  })
}
