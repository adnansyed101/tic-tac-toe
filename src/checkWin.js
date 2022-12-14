import { WINNING_COMBINATIONS } from "../src/variables"
import { cellElements } from "../src/variables"

function checkWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

export { checkWin }