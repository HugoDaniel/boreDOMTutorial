import { webComponent } from "./boreDOM.min.js";

export const GameBoard = webComponent(({ on, self }) => {
  on("play", (mutableState, { event }) => {
    // Find out the index of the pressed button:
    const index = Array.from(self.children).indexOf(
      event.currentTarget.parentNode,
    );

    console.log("Played at square number:", index);
  });

  return ((renderOptions) => {
    // On render/update
  });
});
