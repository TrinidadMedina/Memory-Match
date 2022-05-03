import App from './components/App.js';


if (location.href=="http://localhost:3000/"){
window.addEventListener('mouseover', function(){
    let audio = new Audio('pokemon-opening.mp3');
    audio.play();
}
)    
    document.getElementById("text").addEventListener('change',function(){
    player = document.getElementById("text").value;
    console.log(player);
})
}
if (location.href!="http://localhost:3000/"){
    let cardList = App.createCardList();
    let duplicatedList = App.duplicateList(cardList);
    let shuffledList = App.shuffle(duplicatedList);
    let bigDiv = App.createBoardElements(shuffledList);
    document.getElementById('gameContainer').appendChild(bigDiv);
}

    
       



   
      