# boreDOM tutorial

Welcome to the boreDOM tutorial.

This tutorial is intended to be read commit-by-commit. In here a very simple
tic-tac-toe game will be done using the boreDOM framework.

To start proceed to the next commit.

## 1. Create an index.html file

Start by creating a simple index.html file for the game.

## 2. Create a simple button

The tic tac toe game will be composed of 9 buttons, one for each square.

In boreDOM a web component is automatically created for each `<template>` tag
that has a `data-component` attribute.

In order to create a new component named `game-button` we will be adding its
html to a `<template data-attribute="game-button">`. The boreDOM framework will
then register it as a new web component that can be reused.

## 3. Start boreDOM

In order to use the button component `<game-button></game-button>` we need to
call the `inflictBoreDOM()` function.

To do so, lets bring the `boreDOM.min.js` dist file and import it in a `main.js`
file.

## 4. Create the game board

For the 9 squares lets create another component called "game-board", this
component will have 9 `<game-button>` inside it. Lets style them to be in a 3x3
grid with large buttons.

## 5. Add the JS for the game board

Each component can have associated JS with logic. This is done by adding a
`<script>` tag that has a `src=` attribute that matches the name of the
`data-component`.

This script is then dynamically loaded. This has a lot of limitations that your
app needs to work out with, namely:

- Dynamic scripts imports have to be URL's.
- If you need bundling or tree-shaking, then it needs to happen outside and
  before boreDOM components .js file is in.
- Stuff that is not standard JS will not work.

## 6. Add the onclick event

We can add a `onclick` event and rename it to `play` to each button. Then when
the player interacts with the buttons this even will be fired and can be caught
anywhere in the component hierarchy that includes the `<game-button>` component.

To handle the new `play` event, we can use the `on` method from the initializer
options.

To find out the index of the button being pressed, we can use the `self`
attribute, which corresponds to the self component element (in this case, the
`game-board` since the script matches to it).

## 7. Add the app initial state

The tic-tac-toe initial state is made of the board squares, the next player to
play and the winner (if any).

## 8. Update the state when the user interacts

Update the game state in the event handler whenever the user interacts. This
state now needs to be reflected on the DOM render function being returned.

To set the symbol in the button we use a `<slot>`. In boreDOM each `<slot>` is
available at the `slots` attribute of the init/render function but also in the
HTMLElement itself.

## 9. Look for a winner

To look for a winner condition we are going to bring in a function and update
the handler, so that when the user plays the corresponding winner state is
always updated.

## 10. Display the player status

To let the player know who is going to play next we need to create a new
component.

This component is also responsible to display the winning condition. We will use
the same `slot` technique as before to render the text.

## Thats it!

Thanks for going through this.

The full example can be found in boreDOM repository:
https://github.com/HugoDaniel/boreDOM/tree/main/examples/tic-tac-toe
