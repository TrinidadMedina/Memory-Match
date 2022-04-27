import App from './components/App.js';

let cardList = App.createCardList();
// console.log(cardList);
let duplicateCardList = App.duplicateCards(cardList);
// console.log(duplicateCardList);
let shuffleCardList = App.shuffle(duplicateCardList);
// console.log(App.shuffle(duplicateCardList));
let div = App.createBoardElements(shuffleCardList)

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", limitClicks);
  

let divCard = document.getElementById("divCard");

function limitClicks(){
    //boton start
    startBtn.remove();
    document.getElementById('gameContainer').appendChild(div);
    
    //boton restart
    let button = document.createElement("button");
    button.textContent ="Reiniciar";
    button.id = "restart";
    let gameBox = document.getElementById("gameContainer");
    gameBox.appendChild(button);    
    button.addEventListener('click', function(){
        restart();
    })
  
}

  function restart(divCard){ 
    console.log(div);
    div.remove();
    document.getElementById('gameContainer').appendChild(div)
  }
    
       



   
      