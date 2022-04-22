import pokemon from '../data/pokemon/pokemon.js';


const board = {
  App : () => {
    return console.log('App ');
    },

  cardList : pokemon.items,


  createArrayCards : () => {
    let array = [];
    for(let i in pokemon.items){
      array.push(pokemon.items[i].image)
    }
    return array
  },
  
  createBoardElements : () => {
    let div = document.createElement("div");
    div.className = "divCard";
    for(let i in board.cardList){
      let imgBack = document.createElement('img');
      imgBack.src = "http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg";
      imgBack.className = "image"
      div.appendChild(imgBack);
      }
       
    return div;
    },

  selectCard : () => {
    for(let i in board.createArrayCards()){
    board.createBoardElements().addEventListener('click', function(){
      alert('click');
  
      })
    } 
  }
}
 export default board;


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
//   arrayImg.sort (()=> Math.random()-0.5);




