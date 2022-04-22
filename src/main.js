import  board from './components/App.js';


const prueba = document.getElementById('gameContainer')
prueba.appendChild(board.createBoardElements())

board.selectCard()

console.log(board.cardList)
console.log(board.createArrayCards())


