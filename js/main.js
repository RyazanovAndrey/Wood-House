let line = document.querySelector('.line')
let btnUp = document.querySelector('.btn-up')

let popUpWin = document.querySelector('.popup')
let btnHome = document.querySelector('.btn-home')
let paddingRight = window.innerWidth - document.documentElement.clientWidth + 'px'

let projectsBtn = document.querySelectorAll('.projects-btn')

let range = document.querySelector('.range')
let number = document.querySelector('[type="number"]')
let lineRange = document.querySelector('.line-range')

let inputData = document.querySelectorAll('input')
let priceCount = document.querySelector('.worker-count')

let radioBtn1 = document.querySelectorAll('[name="radio-1"]')
let radioBtn2 = document.querySelectorAll('[name="radio-2"]')
let radioBtn3 = document.querySelectorAll('[name="radio-3"]')
let radioBtn4 = document.querySelectorAll('[name="radio-4"]')

let checkThree = document.querySelector('[name="free"]')
let checkFour = document.querySelector('[name="four"]')

let price = 6000

// Menu

window.addEventListener('scroll', () => {
    let currentY = window.scrollY

    stopMenu(currentY)
    showBtnUp(currentY)
    activeLink(currentY)
})

function stopMenu(num) {
    if(num > 300) {
        line.classList.add('line-fix')
    }else {
        line.classList.remove('line-fix')
    }
}

// ActiveLink

function activeLink(currentY) {
    document.querySelectorAll('section').forEach(item => {
        if(currentY >= item.offsetTop - 100) {
            document.querySelector('.active').classList.remove('active')
            document.querySelector(`[href="#${item.id}"]`).classList.add('active')
        }
    })
    
}

//

btnHome.addEventListener('click', showPopUp)

document.querySelector('.swiper').addEventListener('click', (e) => {
    if(e.target.classList.contains('projects-btn')){
        showPopUp()
    }
})

// Calculator

range.addEventListener('input', () => {
    number.value = range.value
    lineRange.style.width = range.value + '%'
})

number.addEventListener('input', () => {
    range.value = number.value
    lineRange.style.width = range.value + '%'
})

inputData.forEach(item => {
    item.addEventListener('input', () => {
        
        let sum = price * range.value

        radioBtn1.forEach(item => {
            if(item.checked) {
                sum = sum * Number(item.value)
            }
        })

        radioBtn2.forEach(item => {
            if(item.checked) {
                sum = sum * Number(item.value)
            }
        })
        
        radioBtn3.forEach(item => {
            if(item.checked) {
                sum = sum * Number(item.value)
            }
        })

        radioBtn4.forEach(item => {
            if(item.checked) {
                sum = sum * Number(item.value)
            }
        })

        if(checkThree.checked) {
            sum = sum * Number(checkThree.value)
        }

        if(checkFour.checked) {
            sum = sum * Number(checkFour.value)
        }

        let formatter = Intl.NumberFormat('ru')
        priceCount.innerHTML = formatter.format(sum.toFixed(0))
    })
})

// Swiper

const swiper = new Swiper('.slider .swiper', {
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
            spaceBetween: 30
          },
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        320: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        250: {
            slidesPerView: 1,
            spaceBetween: 30
        },
      }
  });

  // Btn-up

function showBtnUp(currentY) {
    if(currentY >= document.documentElement.clientHeight * 2) {
        btnUp.classList.add('show')
    }else {
        btnUp.classList.remove('show')
    }
}

// Popup

function showPopUp() {
    popUpWin.classList.add('open')
    document.body.style.paddingRight = paddingRight
    document.body.classList.add('stop-scroll')
}

window.addEventListener('click', (event) => {
    if(event.target == popUpWin) {
        popUpWin.classList.remove('open')
        document.body.style.paddingRight = null
        document.body.classList.remove('stop-scroll')
    }
})