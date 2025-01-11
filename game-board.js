import { webComponent } from "./boreDOM.min.js";

export const GameBoard = webComponent(({ on, self }) => {
  on("play", (mutableState, { event }) => {
    // Find out the index of the pressed button:
    const index = Array.from(self.children).indexOf(
      event.currentTarget.parentNode,
    );

    const isGameWon = mutableState.gameState.winner !== null;
    const isEmptySquare = mutableState.gameState.board[index] === undefined;

    if (!isGameWon && isEmptySquare) {
      mutableState.gameState.board[index] = mutableState.gameState.nextToPlay;
      // Update the next to play:
      mutableState.gameState.nextToPlay =
        mutableState.gameState.nextToPlay === "O" ? "X" : "O";
    }
  });

  return ((renderOptions) => {
    // On render/update
  });
});
