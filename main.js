import { inflictBoreDOM } from "./boreDOM.min.js";

inflictBoreDOM({
  // Game initial state goes here
  gameState: {
    board: new Array(9),
    nextToPlay: "O",
    winner: null,
  },
});
