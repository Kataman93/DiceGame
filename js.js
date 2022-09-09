
const player1Scoreboard = document.getElementById('player1-scoreboard')
const player2Scoreboard = document.getElementById('player2-scoreboard')
const player1Dice = document.getElementById('player1-dice')
const player2Dice = document.getElementById('player2-dice')
const message = document.getElementById('message')
const rollBtn = document.getElementById('roll-btn')
const resetBtn = document.getElementById('reset-btn')

let player1Result = 0
let player2Result = 0
let player1Turn = true

function switchToResetBtn(x, y) {
    if (x >= 10) {
        rollBtn.style.display = 'none'
        resetBtn.style.display = 'block'
        message.textContent = `Player ${y} Won 🥳`
} }

function righteousness() {
    if (player1Turn) {
        message.textContent = `Player 1 Turn`  
    } else {
        message.textContent = `Player 2 Turn`  
    }
}

rollBtn.addEventListener('click', function() {
    let randomNumber = Math.floor(Math.random() * 7)
    if(player1Turn) {
        player1Result += randomNumber
        player1Scoreboard.textContent = player1Result
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        message.textContent = 'Player 2 Turn'
        player1Turn = false
    } else {
        player2Result += randomNumber
        player2Scoreboard.textContent = player2Result
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        message.textContent = 'Player 1 Turn'
        player1Turn = true
    }
    switchToResetBtn(player1Result, '1')
    switchToResetBtn(player2Result, '2')
})

resetBtn.addEventListener('click', function() {
    rollBtn.style.display = 'block'
    resetBtn.style.display = 'none'
    player1Result = 0
    player2Result = 0
    player1Scoreboard.textContent = '0'
    player2Scoreboard.textContent = '0'
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    righteousness()
})




   

