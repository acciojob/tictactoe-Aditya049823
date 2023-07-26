//your JS code here. If required.
const gameElement = document.getElementById("gamePage");
const msg = document.querySelector(".message");
const cells = document.querySelectorAll(".board td");

let player1 = "Player 1";
let player2 = "Player 2";
let currentPlayer = player1; // Player 1 starts the game

function move() {
  gameElement.style.display = "block";
  startGame();
}

function startGame() {
  player1 = document.getElementById("player1").value || "Player 1";
  player2 = document.getElementById("player2").value || "Player 2";
  currentPlayer = player1;

  // Clear the board and add click event listeners to cells
  cells.forEach((cell) => {
    cell.textContent = ""; // Clear the cell content
    cell.addEventListener("click", handleCellClick, { once: true });
  });

  // Start the game with an initial message
  updateMessage(currentPlayer + ", you're up");
}

function handleCellClick(event) {
      const cell = event.target;
      cell.textContent = currentPlayer;

      if (checkWin()) {
        endGame(currentPlayer + " wins!"); // Player has won
      } else if (checkDraw()) {
        endGame("It's a draw!"); // Draw, no winner
      } else {
        cell.textContent = currentPlayer === player1 ? "X" : "O"; // Switch player turn
        updateMessage(currentPlayer + ", you're up");
      }
    }

 function checkWin() {
      // Define all the possible winning combinations (rows, columns, and diagonals)
      const winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
        [1, 5, 9], [3, 5, 7] // Diagonals
      ];

      // Check each winning combination to see if any player has won
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        const cellA = document.getElementById(a);
        const cellB = document.getElementById(b);
        const cellC = document.getElementById(c);

        if (cellA.textContent === cellB.textContent && cellA.textContent === cellC.textContent && cellA.textContent !== "") {
          // A player has won
          return true;
        }
      }

      return false; // No player has won yet
    }

function checkDraw() {
  // Implement your logic to check for a draw (no winner, board full) here
  // Return true if it's a draw, otherwise return false
  return false;
}

function endGame() {
  // Add logic to handle the end of the game here
  // You can display a message for the winner or a draw
  // You may also want to remove the click event listeners from cells
  // to prevent further moves after the game is over.
  // For example:
  cells.forEach((cell) => {
    cell.removeEventListener("click", handleCellClick);
  });
}

function updateMessage(message) {
  msg.innerText = message;
}
