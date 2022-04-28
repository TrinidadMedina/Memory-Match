import App from './components/App.js';



const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", limitClicks);

function limitClicks(){
    //boton start
    let cardList = App.createCardList();
let duplicateCardList = App.duplicateCards(cardList);
let shuffleCardList = App.shuffle(duplicateCardList);
let div = App.createBoardElements(shuffleCardList,duplicateCardList)
    startBtn.remove();
    document.getElementById('gameContainer').appendChild(div);  
}

    
       



   
      