const startBtn = document.querySelector('.start')
const screens = document.querySelectorAll('.screen')
const timelist = document.querySelector('#time-list')
const timeEl = document.querySelector('#time')
const board = document.querySelector('#board')
const colors = ['red', 'blue', 'green', 'blueviolet']
let time = 0
let score = 0
startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
})
timelist.addEventListener('click', (event) => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
})
board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++
        event.target.remove()
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    timeEl.innerHTML = `00:${time}`
}
function decreaseTime() {
    if (time === 0) {
        finishGame()
    } else {
        let current = --time
        if (current < 10) {
            current = `0${current}`
        }
        timeEl.innerHTML = `00:${current}`
    }
}
function finishGame() {
    timeEl.parentNode.classList.add('hide')
    board.innerHTML = `<h1>score :  <span class='primary'>${score}</span></h1>`
}
function createRandomCircle() {
    const circle = document.createElement('div')
    const size = getRandomNumb(10, 60)
    const { width, height } = board.getBoundingClientRect()
    const x = getRandomNumb(0, width - size)
    const y = getRandomNumb(0, height - size)
    const colorIndex = Math.floor(Math.random() * (colors.length - 1))

    circle.classList.add('circle')
    circle.style.width = `${size}px`
    circle.style.height = `${size}px`
    circle.style.background = colors[colorIndex]
    circle.style.top = `${y}px`
    circle.style.left = `${x}px`
    board.append(circle)
}
function getRandomNumb(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
