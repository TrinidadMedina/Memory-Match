export default {
  modalWin:  function modalWin(){
    let audioWin = new Audio('audios/caught-a-pokemon.mp3');
    audioWin.play();
    let modalContainer = document.getElementById('modalContainer');
    modalContainer.childNodes[1].style.visibility="visible";
    modalContainer.style.visibility="visible";
    modalContainer.childNodes[1].childNodes[1].childNodes[1].addEventListener("click",function(){
      modalContainer.childNodes[1].style.visibility="hidden";
      modalContainer.style.visibility="hidden";
    });
  },
  
  modalMatch: function modalMatch(selectedCardsMiniDiv){
    let modalContainer = document.getElementById("modalMatch");
    modalContainer.childNodes[1].style.visibility="visible";
    modalContainer.style.visibility="visible";
    let matchImg = document.createElement('img');
    matchImg.className = "match-img";
    matchImg.src = selectedCardsMiniDiv[0].lastChild.currentSrc;
    modalContainer.childNodes[1].childNodes[3].appendChild(matchImg);
    let matchImg2 = document.createElement('img');
    matchImg2.className = "match-img";
    matchImg2.src = selectedCardsMiniDiv[1].lastChild.currentSrc;
    modalContainer.childNodes[1].childNodes[3].appendChild(matchImg2);
    setTimeout(function(){
      modalContainer.childNodes[1].style.visibility="hidden";  
      modalContainer.style.visibility="hidden";
      matchImg.remove();
      matchImg2.remove();
    },1500); 
  },

  catchPokemon: function catchPokemon(selectedCardsMiniDiv){
    setTimeout(function(){
      let pokebola = document.createElement('img');
      pokebola.class='pokebola';
      pokebola.src=selectedCardsMiniDiv[0].lastChild.currentSrc;
      pokebola.style.width='50px'; 
      pokebola.style.height='50px';
      document.getElementById("divPokebolas").appendChild(pokebola);
    },1500); 
  },

  fillBar: function fillBar(cardList,match){
    setTimeout(function(){
      let width = (match*100)/(cardList.length);
      document.getElementById("myBar").style.width = width + '%';
    },1500); 
  } 
}