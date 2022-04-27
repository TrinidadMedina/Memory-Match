import pokemon from '../data/pokemon/pokemon.js';
// let cardList = pokemon.items;
let cantPickCard = 0;
let card1="";
let card2 = "";
let card1Src = "";
let finalCount=0;

const App = { 
  createCardList : () => {
    let cardList = pokemon.items;
    console.log(cardList);
    return cardList;
  },
  duplicateCards : (cardList) => {
    for(let i in cardList){
      cardList.push(cardList[i]); 
    }
    return cardList;
  },
  shuffle : (duplicateCardList) => {
    let shuffle = duplicateCardList.sort (()=> Math.random()-0.5);
    return shuffle;
  },
  createBoardElements : (shuffleCardList) => {
    let div = document.createElement("div");
    div.className = "divCard";
    for(let i in shuffleCardList){
      let miniDiv = document.createElement('div');
      miniDiv.className = "miniDiv";
      miniDiv.id="miniDiv";
      let card = document.createElement('img');
      card.src = "https://w7.pngwing.com/pngs/324/645/png-transparent-pokemon-go-gotcha-video-game-jynx-pokeball-orange-pokemon-technology.png";
      card.className = "card";
      card.id=i;
      miniDiv.appendChild(card);
      div.appendChild(miniDiv);
      card.addEventListener("click", function() {
        // console.log(card.currentTarget)
        App.pickCard(card,shuffleCardList);

      })}
    return div;
  },

  pickCard:(card,shuffleCardList)=>{
    if (cantPickCard==0){
      for (let i in shuffleCardList){
        if (card.id === i){
          card.src=shuffleCardList[i].image;
          cantPickCard++;
          console.log(cantPickCard);
          card1 = shuffleCardList[i];
          card1Src = card;
        }
      } 
    }
    else if (cantPickCard==1 && card1Src.id!=shuffleCardList) 
    {
        for (let i in shuffleCardList){
          if (card.id === i){
            card.src=shuffleCardList[i].image;
            cantPickCard++;
            console.log(cantPickCard);
            card2 = shuffleCardList[i];
            if (card1.id===card2.id){
              finalCount++
              cantPickCard = 0;
              console.log(finalCount);
              setTimeout(function(){
              if (finalCount==8){
                finalCount=0;
                alert("HAS GANADO");               
                }
              },1000);

            } else{
                setTimeout(function(){
                  console.log("no es un match");
                  card1Src.src = "https://w7.pngwing.com/pngs/324/645/png-transparent-pokemon-go-gotcha-video-game-jynx-pokeball-orange-pokemon-technology.png";
                  card.src = "https://w7.pngwing.com/pngs/324/645/png-transparent-pokemon-go-gotcha-video-game-jynx-pokeball-orange-pokemon-technology.png";
                  cantPickCard=0;
                },1000);
              }
          }
        }
      }
    }
  }
export default App


