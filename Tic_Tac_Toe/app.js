let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#Reset-btn");
let newbtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; // player X, player O

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn0) {
      //player X turn

      box.innerText = "O";
      box.style.color = "orange";
      turn0 = false;
    } else {
      //player ) turn
      box.innerText = "X";
      box.style.color = "red";
      turn0 = true;
    }
    box.disabled = true;

    checkWin();
  });
});

const resetGame = () => {
  turn0 = true;
  enableBoxes();
  msgContainer.classList.add("hide");
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations , Winner is ${winner}`;
  msg.style.color = "orange";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWin = () => {
  for (let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
      }
    }
  }
};

newbtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);
