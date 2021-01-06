document.addEventListener('DOMContentLoaded', () => {
    const trump = document.querySelector('.trump')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let trumpLeft = 220
    let trumpBottom = 100
    let gravity = 2

    function startGame() {
        trumpBottom -= gravity
        trump.style.bottom = trumpBottom + 'px'
        trump.style.left = trumpLeft + 'px'
    }
    let timerId =setInterval(startGame, 20)

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (trumpBottom < 500) trumpBottom += 50
        trump.style.bottom = trumpBottom + 'px'
        console.log(trumpBottom)
    }
    document.addEventListener('keyup', control)
})