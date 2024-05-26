const imgContainer = document.querySelector(".img__container")
const btnLeft = document.querySelector(".btn-left")
const btnRight = document.querySelector(".btn-right")
const images = document.querySelectorAll(".img__container img")

let currentSlide = 0

function changeImage() {
  imgContainer.style.transform = `translateX(-${
    currentSlide * imgContainer.offsetWidth
  }px)`
}

btnRight.addEventListener('click', function () {
  currentSlide++
  changeImage()
})

btnLeft.addEventListener('click', function () {
  currentSlide--
  changeImage()
})