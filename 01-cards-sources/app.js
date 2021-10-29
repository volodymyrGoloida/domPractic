const slides = document.querySelectorAll('.slide')
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener('click', () => {
        slides[i].classList.toggle('active')
    })
}
function clearActiveClasses() {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
