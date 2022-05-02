import pokemon from '../data/pokemon/pokemon.js';
let selectedCardsMiniDiv = [];
let turn=0;
let match=0;

const App = { 

  createCardList : () => {
    let cardList = pokemon.items;  
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
            miniDiv.id = "miniDiv";
            miniDiv.className = "mini-div";
            divCard.appendChild(miniDiv);
            let cardImageBack = document.createElement('img');
            cardImageBack.id = "cardImageBack"
            cardImageBack.className = "card-image-back";
            cardImageBack.src = "https://www.ubuy.com.pl/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvOTFCdURYbkl3c0wuX0FDX1NMMTUwMF8uanBn.jpg"
            miniDiv.appendChild(cardImageBack);
            let cardImageFront = document.createElement('img'); 
            cardImageFront.id = duplicatedList[i].id;
            cardImageFront.className = "card-image-front";
            cardImageFront.src = duplicatedList[i].image;
            (i >=(duplicatedList.length)/2)? cardImageFront.title="Original":cardImageFront.title="Copy";
            miniDiv.appendChild(cardImageFront);  
            miniDiv.addEventListener('click', App.flipSelectedCard);     
        } 
        bigDiv.appendChild(player)
        bigDiv.appendChild(divCard);
              
        return bigDiv 
    },

    flipSelectedCard: function flipSelectedCard(){
                turn++; 
                let selectedCardMiniDiv = this
                selectedCardsMiniDiv.push(selectedCardMiniDiv);
                
                selectedCardMiniDiv.style.transform = 'rotateY(180deg)'
                return App.checkMatch()
    },   
            
    checkMatch: function checkMatch(){
        if(turn===2){

            turn=0;
              if(selectedCardsMiniDiv[0].lastElementChild.currentSrc===selectedCardsMiniDiv[1].lastElementChild.currentSrc&&
              selectedCardsMiniDiv[0].lastElementChild.title!=selectedCardsMiniDiv[1].lastElementChild.title){
                    match++;
                    
                    selectedCardsMiniDiv = [];  
                    console.log('match');

                
                // }else{
                //     setTimeout(function(){
                //         selectedCardsMiniDiv[0].style.transform = 'rotateY(-0deg)';
                //         selectedCardsMiniDiv[1].style.transform = 'rotateY(-0deg)'
                //         selectedCardsMiniDiv = [];   
                //     },1000);    
                // }
              }
             
        }      
    },

    modal: function modal(){
        if(match===cardList.length){ //END GAME CONDITION 
            //         setTimeout(function(){
                    console.log("GANASTE!");
            //         let modalContainer = document.getElementById("modalContainer");
            //         modalContainer.childNodes[1].style.visibility="visible"
            //         modalContainer.style.visibility="visible"
            //         modalContainer.childNodes[1].childNodes[1].childNodes[1].addEventListener("click",function(){
            //         modalContainer.childNodes[1].style.visibility="hidden"  
            //         modalContainer.style.visibility="hidden"
        }            

    }
}
export default App


