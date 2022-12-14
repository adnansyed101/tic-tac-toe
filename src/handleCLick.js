import { circleTurn } from "../src/startGame.js"
import { CIRCLE_CLASS } from "../src/variables.js"
import { X_CLASS } from "../src/variables.js"
import { placeMark } from "../src/placeMark.js"
import { checkWin } from "../src/checkWin.js"
import { endgame } from "../src/endgame.js"
import { swapTurns } from "../src/startGame.js"
import { isDraw } from "../src/isdraw.js"
import { setBoardHoverClass } from "./setBoardHoverClass.js"

function handleClick(e) {
    const cell = e.target
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS
    placeMark(cell, currentClass)
    if (checkWin(currentClass)) {
        endgame(false)
    } else if (isDraw()) {
        endgame(true)
    } else {
        swapTurns()
        setBoardHoverClass()
    }
}



export { handleClick }