const board = document.querySelector('#board')
const colors = [
    '#3D2C8D',
    '#334756',
    '#082032',
    '#ECAC5D',
    '#FFB085',
    '#B24080',
    '#FFF9B2',
]
const SQUARES_NUMBER = 497
for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', setColor)
    square.addEventListener('mouseleave', removeColor)

    board.append(square)
}
function setColor(event) {
    const color = getRandomColor()
    event.target.style.backgroundColor = color
    event.target.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(event) {
    event.target.style.backgroundColor = '#1d1d1d'
    event.target.style.boxShadow = '0 0 2px black'
}
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
}
