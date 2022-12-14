import { cellElements } from "../src/variables"
import { X_CLASS } from "../src/variables"
import { CIRCLE_CLASS } from "../src/variables"

function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
            cell.classList.contains(CIRCLE_CLASS)
    })
}

export { isDraw }