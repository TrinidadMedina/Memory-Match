import pokemon from '../data/pokemon/pokemon.js';
import utilities from '../utilities.js';

let matchCount=0;  // para el win. llega a la cantidad de cartas/2 max. 
let counting=0;    // para player. lleva la cuenta de intentos
let cardList = pokemon.items;  // la data. un array de varios objetos. 
let turn=0;     // para controlar las cartas dadas vueltas y para hacer la comparación cuando llegue a 2. 
let selectedCardsMiniDiv=[]; //para tener el par de cartas seleccionadas.


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
    console.log(shuffled)
    return shuffled;
  },
  createBoardElements: (shuffled)=>{
    let bigDiv = document.createElement("div");
    let player = document.createElement('div');
    let divCount = document.createElement('div');
    let divProgress = document.createElement('div');
    let divBar = document.createElement('div');
    let bar = document.createElement('div');
    let divPokebolas = document.createElement('div');
    let parCaptures = document.createElement('div');
    let divCard = document.createElement('div');
    bigDiv.id = "bigDiv";
    player.id='player';
    divCount.id ='divCount';
    divBar.id = "myProgress";
    bar.id = 'myBar';
    divPokebolas.id = "divPokebolas";
    divCard.id = "divCard";
    bigDiv.className = "big-div";
    player.className='player';
    divCard.className = "div-card";
    player.textContent = 'Jugador@: '+localStorage.getItem('PlayerName');
    divCount.textContent='Intentos: '+     counting;
    divProgress.textContent='Progreso: ';
    parCaptures.textContent='Capturas: ';
    player.appendChild(divCount);
    player.appendChild(divProgress);
    divBar.appendChild(bar);
    player.appendChild(divBar);
    player.appendChild(parCaptures);
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
    console.log(bigDiv)
    return bigDiv;
  },
  
  flipSelectedCard: function (){
    if (turn<2){
      turn++; 
      console.log(this)
      this.style.transform = 'rotateY(180deg)';
      selectedCardsMiniDiv.push(this);
      if (turn===2 && selectedCardsMiniDiv[0].id==selectedCardsMiniDiv[1].id){
        selectedCardsMiniDiv.pop();
        turn=1;
      }
      else{
        if (turn ===2){
          setTimeout(function(){
            counting++;
            utilities.actualCount(counting);
            let cardsForMatch = App.checkMatch(selectedCardsMiniDiv[0].name, selectedCardsMiniDiv[1].name);
            if(cardsForMatch){
              App.match();
            }else{
              App.noMatch();
            }
          },850) 
        }
      } 
    }
  },

  checkMatch:(card1,card2)=>{
    if(card1==card2){
      return true
    } else {
      return  false
    }
  },

  match:()=>{
    setTimeout(function(){
      matchCount++;
      selectedCardsMiniDiv[0].style.visibility ="hidden";
      selectedCardsMiniDiv[1].style.visibility ="hidden";
      utilities.modalMatch(selectedCardsMiniDiv);
      utilities.catchPokemon(selectedCardsMiniDiv);
      utilities.fillBar(cardList,matchCount);
      App.resetValues();
      if(matchCount===cardList.length){
        setTimeout(function(){
          utilities.modalWin(counting);
        },3000);
      } 
    },1)
    return
  },

  noMatch:()=>{
    setTimeout(function(){
      selectedCardsMiniDiv[0].style.transform = 'rotateY(0deg)';
      selectedCardsMiniDiv[1].style.transform = 'rotateY(0deg)';
      let audioNoMatch = new Audio("audios/nope.mp3");
      audioNoMatch.playbackRate=2;
      audioNoMatch.volume = 0.7;
      audioNoMatch.play();
      App.resetValues(); 
    },1000); 
    return      
  },  

  resetValues: ()=>{
    turn=0;
    selectedCardsMiniDiv=[];
    return
  },
}           
export default App;