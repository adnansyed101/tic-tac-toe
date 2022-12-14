import '../src/styles.css'
import { startGame } from '../src/startGame'
import { restartButton } from '../src/variables'

startGame()

restartButton.addEventListener('click', startGame)