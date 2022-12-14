import { winningMessageTextElement } from "../src/variables"
import { winningMessageElement } from "../src/variables"
import { circleTurn } from "../src/startGame"

function endgame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!'
    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`
    }
    winningMessageElement.classList.add('show')
}

export { endgame }