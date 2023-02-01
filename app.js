const firstScore = document.querySelector('#first-score')
const secScore = document.querySelector('#sec-score')
const player1 = document.querySelector('#player1')
const player2 = document.querySelector('#player2')
const lets = document.querySelector('.lets')
const btn = document.querySelector('.btn')

let num = 0
btn.addEventListener('click', () => {
    let number = Math.ceil(Math.random() * 5)
    let number2 = Math.ceil(Math.random() * 5)
    let first = firstScore.innerText = number;
    let second = secScore.innerText = number2;

    if (first > second) {
        lets.innerText = `Player1 wins 🏆`
        console.log(lets);
    } else if (first == second) {
        lets.innerText = "It's a tie 🤞"
    } else {
        lets.innerText = `Player2 wins 🏆`
    }
})