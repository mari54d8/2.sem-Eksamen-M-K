const imgContainer = document.querySelector(".img__container1")
const btnLeft = document.querySelector(".btn-left1")
const btnRight = document.querySelector(".btn-right1")
const images = document.querySelectorAll(".img__container1 img")

let currentSlide = 0

function changeImage() {
  if(currentSlide > images.length -1){
    currentSlide = 0
  } else if (currentSlide < 0){
    currentSlide = images.length -1
  }
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

const imgContainer2 = document.querySelector(".img__container2")
const btnLeft2 = document.querySelector(".btn-left2")
const btnRight2 = document.querySelector(".btn-right2")
const images2 = document.querySelectorAll(".img__container2 img")

let currentSlide2 = 0

function changeImage2() {
  if(currentSlide2 > images2.length -1){
    currentSlide2 = 0
  } else if (currentSlide2 < 0){
    currentSlide2 = images2.length -1
  }
  imgContainer2.style.transform = `translateX(-${
    currentSlide2 * imgContainer2.offsetWidth
  }px)`
}

btnRight2.addEventListener('click', function () {
  currentSlide2++
  changeImage2()
})

btnLeft2.addEventListener('click', function () {
  currentSlide2--
  changeImage2()
})

const imgContainer3 = document.querySelector(".img__container3")
const btnLeft3 = document.querySelector(".btn-left3")
const btnRight3 = document.querySelector(".btn-right3")
const images3 = document.querySelectorAll(".img__container3 img")

let currentSlide3 = 0

function changeImage3() {
  if(currentSlide3 > images3.length -1){
    currentSlide3 = 0
  } else if (currentSlide3 < 0){
    currentSlide3 = images3.length -1
  }
  imgContainer3.style.transform = `translateX(-${
    currentSlide3 * imgContainer3.offsetWidth
  }px)`
}

btnRight3.addEventListener('click', function () {
  currentSlide3++
  changeImage3()
})

btnLeft3.addEventListener('click', function () {
  currentSlide3--
  changeImage3()
})

const imgContainer4 = document.querySelector(".img__container4")
const btnLeft4 = document.querySelector(".btn-left4")
const btnRight4 = document.querySelector(".btn-right4")
const images4 = document.querySelectorAll(".img__container4 img")

let currentSlide4 = 0

function changeImage4() {
  if(currentSlide4 > images4.length -1){
    currentSlide4 = 0
  } else if (currentSlide4 < 0){
    currentSlide4 = images4.length -1
  }
  imgContainer4.style.transform = `translateX(-${
    currentSlide4 * imgContainer4.offsetWidth
  }px)`
}

btnRight4.addEventListener('click', function () {
  currentSlide4++
  changeImage4()
})

btnLeft4.addEventListener('click', function () {
  currentSlide4--
  changeImage4()
})
