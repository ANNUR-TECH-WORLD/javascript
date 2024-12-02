import { winLogic } from "./AppendFile2.js";
const PlayerX = "X";
const PlayerY = "Y";
let PlayerHasPlayed = false;
const Choices = document.querySelectorAll("#box");

Choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    // Return after first player makes choice
    if (choice.innerHTML) return;
    // state the value of the player
    if (PlayerHasPlayed) {
      choice.innerHTML = PlayerY;
    } else {
      choice.innerHTML = PlayerX;
    }
    // decalre gameboard content and map tgem to their innerHtml
    const Gameboard = Array.from(Choices).map((node) => node.innerHTML);

    TestWin(Gameboard);

    PlayerHasPlayed = !PlayerHasPlayed;
  });
});

function TestWin(Gameboard) {
  for (const logic of winLogic) {
    const PlayerXWins = logic.every((index) => Gameboard[index - 1] == PlayerX);
    if (PlayerXWins) {
      alert("Player one has won");
      break;
    }
    const PlayerYWins = logic.every((index) => Gameboard[index - 1] == PlayerY);
    if (PlayerYWins) {
      alert("Player TWO has won");
      break;
    }
  }
}
