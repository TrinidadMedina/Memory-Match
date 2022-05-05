import App from './components/App.js';

if (location.href=="http://localhost:3000/"){
    document.getElementById("text").addEventListener('change',function(){
        let player = document.getElementById("text").value;
        console.log(player);
        if (player!=""){
            let str = "Se escaparon mis Pokemones y dicen que solo regresarán si encontramos a sus parejas... ¿me ayudas a atraparlos?";
            let arr = Array.from(str);
            for (let i=0;i<arr.length;i++){
                setTimeout(function(){
                    document.getElementById('p').innerHTML+=arr[i];
                },80 * i)
            }
            setTimeout(function(){
                document.getElementById('start').style.visibility='visible';
            },9500)    
        } 
    })   
}

if (location.href!="http://localhost:3000/"){
    let audio = new Audio('audios/main-theme.mp3');
        audio.play();
        audio.volume = 0.7;
        audio.loop=true;
    let cardList = App.createCardList();
    let duplicatedList = App.duplicateList(cardList);
    let shuffledList = App.shuffle(duplicatedList);
    let bigDiv = App.createBoardElements(shuffledList);
    document.getElementById('gameContainer').appendChild(bigDiv);
}

    
       



   
      