import pokemon from '../data/pokemon/pokemon.js';
import utilities from '../utilities.js';

let selectedCardsMiniDiv = [];
let turn=0;
let match=0;
let cardList = pokemon.items; 

const App = { 
  createCardList : () => {
    return cardList;
  },

  duplicateList : (cardList) => {
    let duplicatedList = cardList.concat(cardList);
    return duplicatedList;
  },

  shuffle : (duplicatedList)=>{
    let shuffled =[];
    shuffled = shuffled.concat(duplicatedList);
    for(let i=0; i<shuffled.length;i++ ){
      let randomNumber = Math.floor(Math.random() * (shuffled.length-i))+i;
      let ranNumLoop = shuffled[i];
      shuffled[i]=shuffled[randomNumber];
      shuffled[randomNumber] = ranNumLoop;
    }
    return shuffled;
  },

  createBoardElements: (shuffled)=>{
    let bigDiv = document.createElement("div");
    let player = document.createElement('div');
    let divBar = document.createElement('div');
    let bar = document.createElement('div');
    let divPokebolas = document.createElement('div');
    let divCard = document.createElement('div');
    bigDiv.id = "bigDiv";
    player.id='player';
    divBar.id = "myProgress";
    bar.id = 'myBar';
    divPokebolas.id = "divPokebolas";
    divCard.id = "divCard";
    bigDiv.className = "big-div";
    player.className='player';
    divCard.className = "div-card";
    player.textContent = localStorage.getItem('PlayerName');
    divBar.appendChild(bar);
    player.appendChild(divBar);
    player.appendChild(divPokebolas);
    bigDiv.appendChild(player);
    bigDiv.appendChild(divCard); 
    for(let i in shuffled){
      let miniDiv = document.createElement('div');
      miniDiv.id = i;
      miniDiv.name = shuffled[i].id;
      miniDiv.className = "mini-div";
      miniDiv.audio = shuffled[i].audio;
      divCard.appendChild(miniDiv);
      let cardImageBack = document.createElement('img');
      cardImageBack.id = "cardImageBack";
      cardImageBack.className = "card-image-back";
      cardImageBack.src = "pictures/back-goldencard-img.png";
      miniDiv.appendChild(cardImageBack);
      let cardImageFront = document.createElement('img'); 
      cardImageFront.id = 'cardImageFront';
      cardImageFront.className = "card-image-front";
      cardImageFront.src = shuffled[i].image;
      miniDiv.appendChild(cardImageFront);  
      miniDiv.addEventListener('click', App.flipSelectedCard);        
    }       
    return bigDiv; 
  },

  flipSelectedCard: function flipSelectedCard(){
    if (turn<2){
      turn++; 
      this.style.transform = 'rotateY(180deg)';
      selectedCardsMiniDiv.push(this);
      if (turn===2 && selectedCardsMiniDiv[0].id==selectedCardsMiniDiv[1].id){
        selectedCardsMiniDiv.pop();
        turn=1;
      }
      else{
        if (turn ===2){
          setTimeout(function(){
            return App.checkMatch();
          },850) 
        }
      } 
    }
  },   
            
  checkMatch:()=>{  
    if(selectedCardsMiniDiv[0].name==selectedCardsMiniDiv[1].name){
      let audioMatch = new Audio(selectedCardsMiniDiv[0].audio);
      audioMatch.volume = 0.9;
      audioMatch.play();
      match++;
      selectedCardsMiniDiv[0].style.visibility ="hidden";
      selectedCardsMiniDiv[1].style.visibility ="hidden";
      utilities.modalMatch(selectedCardsMiniDiv);
      utilities.catchPokemon(selectedCardsMiniDiv);
      utilities.fillBar(cardList,match);
      turn=0;
      selectedCardsMiniDiv = [];
      if(match===cardList.length){
        setTimeout(function(){
          utilities.modalWin();
        },3000);
      }
    }else{
      setTimeout(function(){
        selectedCardsMiniDiv[0].style.transform = 'rotateY(0deg)';
        selectedCardsMiniDiv[1].style.transform = 'rotateY(0deg)';
        let audioNoMatch = new Audio("audios/nope.mp3");
        audioNoMatch.playbackRate=2;
        audioNoMatch.volume = 0.7;
        audioNoMatch.play();
        turn=0;
        selectedCardsMiniDiv = []; 
      },1000);      
    }    
  },
}            

export default App;