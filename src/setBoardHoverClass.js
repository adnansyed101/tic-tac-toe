import { board } from "../src/variables"
import { X_CLASS } from "../src/variables"
import { CIRCLE_CLASS } from "../src/variables"
import { circleTurn } from "../src/startGame"

function setBoardHoverClass() {
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if (circleTurn) {
        board.classList.add(CIRCLE_CLASS)
    } else {
        board.classList.add(X_CLASS)
    }
}

export { setBoardHoverClass }