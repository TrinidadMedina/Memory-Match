import pokemon from '../data/pokemon/pokemon.js';
let selectedCardsMiniDiv = [];
let turn=0;
let match=0;
let cardList = pokemon.items; 

const App = { 

  createCardList : () => {
    return cardList;
  },

  duplicateList : (cardList) => { //INPUT: OBJ POKEMON.   NAME: {STRING(P)} & ITEM [ARRAY OF 8 {NAME:"String" IMAGE:"String"}]
    let duplicatedList = cardList.concat(cardList);
    return duplicatedList; //OUTPUT: OBJ POKEMON.   NAME: {STRING(P)} & ITEM [ARRAY OF 16 {NAME:"String" IMAGE:"String"}]
  },

  shuffle : (duplicatedList)=>{  //INPUT OBJ POKEMON.   NAME: {STRING(P)} & ITEM [ARRAY OF 16 {NAME:"String" IMAGE:"String"}]
    for(let i=0; i<duplicatedList.length;i++ ){
        let randomNumber = Math.floor(Math.random() * (duplicatedList.length-i))+i;
        let ranNumLoop = duplicatedList[i]
        duplicatedList[i]=duplicatedList[randomNumber]
        duplicatedList[randomNumber] = ranNumLoop
    }
    return duplicatedList //OUTPUT: SHUFFLED ITEMS OF OBJ POKEMON.  NAME: {STRING(P)} & ITEM [ARRAY OF 16 {NAME:"String" IMAGE:"String"}] 
  },

    createBoardElements: (duplicatedList)=>{ //INPUT SHUFFLED ITEMS OF OBJ POKEMON.  NAME: {STRING(P)} & ITEM [ARRAY OF 16 {NAME:"String" IMAGE:"String"}]
        let bigDiv = document.createElement("div");
        bigDiv.id = "bigDiv";
        bigDiv.className = "big-div"
        let player = document.createElement('div');
        player.id='player';
        player.className='player';
        player.textContent='Maca';
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
            divCard.appendChild(miniDiv);
            let cardImageBack = document.createElement('img');
            cardImageBack.id = "cardImageBack"
            cardImageBack.className = "card-image-back";
            cardImageBack.src = "https://www.ubuy.com.pl/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFCdURYbkl3c0wuX0FDX1NMMTUwMF8uanBn.jpg"
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
        return App.checkMatch();
      } 
    },   
            
    checkMatch: function checkMatch(){
      if(turn===2){
        turn=0;
       
        if(selectedCardsMiniDiv[0].name==selectedCardsMiniDiv[1].name){
          match++;
          console.log(match);
          selectedCardsMiniDiv[0].style.visibility ="hidden";
          selectedCardsMiniDiv[1].style.visibility ="hidden";
          let pokebola = document.createElement('img');
          pokebola.class='pokebola';
          pokebola.src=selectedCardsMiniDiv[0].lastChild.currentSrc;
          pokebola.style.width='50px'; 
          pokebola.style.height='50px';
          divPokebolas.appendChild(pokebola);
          let bar = document.getElementById("myBar");
          let width = (match*100)/(cardList.length);
          bar.style.width = width + '%';
        
        
            let modalContainer = document.getElementById("modalMatch");
            modalContainer.childNodes[1].style.visibility="visible";
            modalContainer.style.visibility="visible";
            let matchImg = document.createElement('img');
            matchImg.className = "match-img";
            matchImg.src = selectedCardsMiniDiv[0].lastChild.currentSrc;
            modalContainer.childNodes[1].childNodes[3].appendChild(matchImg);
            
            setTimeout(function(){
            modalContainer.childNodes[1].style.visibility="hidden";  
            modalContainer.style.visibility="hidden";
            matchImg.remove();
          },3000); 
          
          selectedCardsMiniDiv = [];

          if(match===cardList.length){
            setTimeout(function(){
              App.modal();
            },2000);
          }
        } else {
          setTimeout(function(){
            selectedCardsMiniDiv[0].style.transform = 'rotateY(0deg)';
            selectedCardsMiniDiv[1].style.transform = 'rotateY(0deg)';
            selectedCardsMiniDiv = [];
            
          },2000); 
        } 
      }
    },

    modal: function modal(){
      let modalContainer = document.getElementById("modalContainer");
      modalContainer.childNodes[1].style.visibility="visible"
      modalContainer.style.visibility="visible"
      modalContainer.childNodes[1].childNodes[1].childNodes[1].addEventListener("click",function(){
      modalContainer.childNodes[1].style.visibility="hidden"  
      modalContainer.style.visibility="hidden"
      })
    },

   
  }            

export default App


