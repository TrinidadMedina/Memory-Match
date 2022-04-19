import pokemon from '../data/pokemon/pokemon.js';

let arrayImg =[];

const App = () => {
  for (let i=0;i<pokemon.items.length;i++){
    arrayImg.push(pokemon.items[i].image);
  }
  arrayImg = arrayImg.reverse();
  arrayImg.sort (()=> Math.random()-0.5);
  
  let div = document.createElement("div");
  div.className = "cara detras";
  for (let i=0;i<arrayImg.length;i++){ 
    let el = document.createElement('img');
    el.className = "visible";
    el.setAttribute('style', 'height: 140; width: 120px;');
    el.src = "http://chetart.com/blog/wp-content/uploads/2012/05/playing-card-back.jpg";
    el.addEventListener("click", myFunction, false);
    div.appendChild(el);
    function myFunction (){
      el.src = arrayImg[i];
    }
  }
  return div;
};

export default App;

