//
// Para incluir los diferentes sets de cartas podemos _importar_ el archivo
// JavasSript que contenga el `export` correspondiente...
//
import pokemon from '../data/pokemon/pokemon.js';
let arrayImg =[];

const App = () => {
  for (let i=0;i<pokemon.items.length;i++){
    arrayImg.push(pokemon.items[i].image);
  }
  let div = document.createElement("div");
  arrayImg = arrayImg.reverse();
  console.log(arrayImg);
  function shuffle (){
    for (let i=0;i<arrayImg.length;i++){
      let ranNumLoop = arrayImg[i];
      let randomNum = Math.floor(Math.random() * (arrayImg.length-i))+i; 
      arrayImg[i]= arrayImg[randomNum];// cambiar de valor posición num   
      arrayImg[randomNum] = ranNumLoop; // reposicionar valor de posición random  
      let el = document.createElement('img');
      el.className = "imgShow";
      el.src = arrayImg[i];
      div.appendChild(el);
    }
    console.log(arrayImg);
    }
  shuffle(arrayImg);
  return div;
};

export default App;