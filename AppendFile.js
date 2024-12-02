import { winLogic } from "./AppendFile2";
let PlayerOne = "X";
let PlayerTwo = "Y";
let PlayerHasPlayed = false;


let choices = document.querySelectorAll("#box");

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (PlayerHasPlayed) {
      choice.innerHTML = PlayerTwo;
    } else {
      choice.innerHTML = PlayerOne;
    }
    // if player one has played, player two's turn
    PlayerHasPlayed = !PlayerHasPlayed;


   
  
  });

});
