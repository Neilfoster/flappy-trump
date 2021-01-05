document.addEventListener('DOMContentLoaded', () => {
    const trump = document.querySelector('.trump')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground')

    let trumpLeft = 220
    let trumpBottom = 100

    function startGame() {
        trump.style.bottom = trumpBottom + 'px'
        trump.style.left = trumpLeft + 'px'
    }
    startGame()
})