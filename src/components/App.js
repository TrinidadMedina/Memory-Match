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
    for(let i=0; i<duplicatedList.length;i++ ){
        let randomNumber = Math.floor(Math.random() * (duplicatedList.length-i))+i;
        let ranNumLoop = duplicatedList[i]
        duplicatedList[i]=duplicatedList[randomNumber]
        duplicatedList[randomNumber] = ranNumLoop
    }
    return duplicatedList
  },
  createBoardElements: (duplicatedList)=>{
    let bigDiv = document.createElement("div");
    bigDiv.id = "bigDiv";
    bigDiv.className = "big-div"
    let player = document.createElement('div');
    player.id='player';
    player.className='player';
    player.textContent = localStorage.getItem('PlayerName')
    let divBar = document.createElement('div');
    divBar.id = "myProgress";
    let bar = document.createElement('div');
    bar.id = 'myBar';
    divBar.appendChild(bar);
    player.appendChild(divBar);
    let divPokebolas = document.createElement('div');
     divPokebolas.id = "divPokebolas";
    player.appendChild(divPokebolas);
    let divCard = document.createElement('div');
    divCard.id = "divCard"
    divCard.className = "div-card"
    for(let i in duplicatedList){
      let miniDiv = document.createElement('div');
      miniDiv.id = i;
      miniDiv.name = duplicatedList[i].id;
      miniDiv.className = "mini-div";
      miniDiv.audio = duplicatedList[i].audio;
      divCard.appendChild(miniDiv);
      let cardImageBack = document.createElement('img');
      cardImageBack.id = "cardImageBack"
      cardImageBack.className = "card-image-back";
      cardImageBack.src = "pictures/back-goldencard-img.png"
      miniDiv.appendChild(cardImageBack);
      let cardImageFront = document.createElement('img'); 
      cardImageFront.id = 'cardImageFront';
      cardImageFront.className = "card-image-front";
      cardImageFront.src = duplicatedList[i].image;
      miniDiv.appendChild(cardImageFront);  
      miniDiv.addEventListener('click', App.flipSelectedCard);        
    } 
    bigDiv.appendChild(player)
    bigDiv.appendChild(divCard);       
    return bigDiv 
  },

  flipSelectedCard: function flipSelectedCard(){
    if (turn<2){
      turn++; 
      this.style.transform = 'rotateY(180deg)';
      selectedCardsMiniDiv.push(this);
      if (turn===2 && selectedCardsMiniDiv[0].id==selectedCardsMiniDiv[1].id){
        selectedCardsMiniDiv.pop();
        turn=1;
        console.log('no puedes la misma cartaaaaa');
      }
      else{
        console.log('ojala que hagas match');
        if (turn ===2){
          setTimeout(function(){
            return App.checkMatch();
          },850) 
        }
      } 
    }
  },   
            
  checkMatch: function checkMatch(){  
    if(selectedCardsMiniDiv[0].name==selectedCardsMiniDiv[1].name){
      turn=0;
      let audioMatch = new Audio(selectedCardsMiniDiv[0].audio);
      audioMatch.volume = 0.3;
      audioMatch.play();
      match++;
      console.log(match);
      selectedCardsMiniDiv[0].style.visibility ="hidden";
      selectedCardsMiniDiv[1].style.visibility ="hidden";
      utilities.modalMatch(selectedCardsMiniDiv);
      setTimeout(function(){
        let pokebola = document.createElement('img');
        pokebola.class='pokebola';
        pokebola.src=selectedCardsMiniDiv[0].lastChild.currentSrc;
        pokebola.style.width='50px'; 
        pokebola.style.height='50px';
        divPokebolas.appendChild(pokebola);
        let width = (match*100)/(cardList.length);
        myBar.style.width = width + '%';
        selectedCardsMiniDiv = [];
      },1500); 
      if(match===cardList.length){
        setTimeout(function(){
          utilities.modal();
        },3000);
      }
      }else{
      setTimeout(function(){
        console.log('no es match');
        selectedCardsMiniDiv[0].style.transform = 'rotateY(0deg)';
        selectedCardsMiniDiv[1].style.transform = 'rotateY(0deg)';
        selectedCardsMiniDiv = [];  
        turn=0; 
      },1000);      
    }    
  },

}            

export default App;