// import { circleTurn } from "../src/variables"
import { cellElements } from "../src/variables"
import { winningMessageElement } from "../src/variables"
import { X_CLASS } from "../src/variables"
import { CIRCLE_CLASS } from "../src/variables"
import { handleClick } from "../src/handleCLick"
import { setBoardHoverClass } from "../src/setBoardHoverClass"

let circleTurn

function startGame() {
    circleTurn = false
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    })
    setBoardHoverClass()
    winningMessageElement.classList.remove('show')
}

function swapTurns() {
    circleTurn = !circleTurn
}

export { startGame, circleTurn, swapTurns}