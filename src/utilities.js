export default {
   modal:  function modal(){
        /*   let audioWin = new Audio('audios/caught-a-pokemon.mp3');
          audioWin.play(); */
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
    }
}

