let slider = document.getElementById('slider')
let slideItem = Array.from(slider.children)
let btnPrev = document.getElementById('btnPrev')
let btnNext = document.getElementById('btnNext')

let currentIndex = 0;

function showSlide(index) {
    slideItem[currentIndex].classList.add('hidden')
    
    if (index >= slideItem.length) {
        currentIndex = 0
    } else if (index < 0) {
        currentIndex = slideItem.length - 1
    } else {
        currentIndex = index
    }
    
    slideItem[currentIndex].classList.remove('hidden')
}

slideItem.forEach((slide, index) => {
    if (index === 0) {
        slide.classList.remove('hidden')
    } else {
        slide.classList.add('hidden')
    }
})

slideItem.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        showSlide(currentIndex + 1)
    })
})

// Controls
if (btnNext) {
    btnNext.addEventListener('click', () => {
        showSlide(currentIndex + 1)
    })
}
if (btnPrev) {
    btnPrev.addEventListener('click', () => {
        showSlide(currentIndex - 1)
    })
}