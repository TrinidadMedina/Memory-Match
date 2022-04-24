import pokemon from '../data/pokemon/pokemon.js';
let cardList = pokemon.items;
const  App = {
  
  duplicateCards : () => {
    for(let i in cardList){
        cardList.push(cardList[i]); 
        console.log(pokemon.items.length);
    } return cardList;
  },
  
  /*createCardsImage : () => {
    let cardListImage = [];
    for(let i in pokemon.items){
      cardListImage.push(pokemon.items[i].image)  
    }
    return cardListImage;
  },*/  
  
  shuffle : () => {
    let shuffle = App.duplicateCards().sort (()=> Math.random()-0.5);
    return shuffle;
  },

  createBoardElements : () => {
    let div = document.createElement("div");
    div.className = "divCard";
    for(let i in App.shuffle()){
      let miniDiv = document.createElement('div');
      miniDiv.className = "miniDiv";
      let front = document.createElement('img');
      front.src = pokemon.items[i].image;
      front.className = "front";
      front.id = pokemon.items[i].id;
      let back = document.createElement('img');
      back.src = "https://www.serebii.net/Toolbar/icon/gologo.png";
      back.className = 'back';
      miniDiv.appendChild(front);
      miniDiv.appendChild(back);
      div.appendChild(miniDiv);

      miniDiv.addEventListener("click", function(){ 
        let selectCard = this
        selectCard.classList.add('flip');
        console.log(selectCard)});
      //Dar vuelta la carta
      //card.addEventListener("click", App.pickCard, false)
    }

    return div;
  },
/*
  pickCard : () => {
      card.src=App.shuffle()[i];
      console.log(card.src);
  },*/
}
export default App;


//   let div = document.createElement("div");
//   div.className = "cara-detras";
//   for (let i=0;i<arrayImg.length;i++){ 
//     let el = document.createElement('img');
//     el.className = "visible";
//     el.setAttribute('style', 'height: 140; width: 120px;');
//     el.src = "http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg";
//     el.addEventListener("click", myFunction, false);
//     div.appendChild(el);
//     function myFunction (){
//       el.src = arrayImg[i];
//     }
//   }
//   return div;
// };




//  arrayImg = arrayImg.reverse();
//   




