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
