import App from './components/App.js';


if (location.href=="http://localhost:3000/"){
    /* window.addEventListener('mouseover', function(){
        let audio = new Audio('pokemon-opening.mp3');
        audio.play();}
    ); */

    let str = "Se escaparon mis Pokemones y dicen que solo regresarán si encontramos a sus parejas... ¿me ayudas a atraparlos?";
    let arr = Array.from(str);
    for (let i=0;i<arr.length;i++){
        setTimeout(function(){
            document.getElementById('p').innerHTML+=arr[i];
        },100 * i)
    }  
        
   
    document.getElementById("text").addEventListener('change',function(){
    player = document.getElementById("text").value;
    console.log(player);
})
}
if (location.href!="http://localhost:3000/"){
    let cardList = App.createCardList();
    let duplicatedList = App.duplicateList(cardList);
    let shuffledList = App.shuffle(duplicatedList);
    let bigDiv = App.createBoardElements(shuffledList);
    document.getElementById('gameContainer').appendChild(bigDiv);
}

    
       



   
      