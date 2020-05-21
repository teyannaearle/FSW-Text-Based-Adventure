## Text-Based-Adventure

This project will build on the skills that you've learned after your first couple weeks of programming in JavaScript! You will build a command line application that plays a text-based adventure game.

## Setup Instructions

1. Fork this repo
1. Clone the forked repo to your machine
1. `cd` to the cloned folder and type `npm install` in the terminal. 
1. Create a file called `.gitignore`.
1. Inside of .gitignore write `node_modules/`

## Submission Instructions

1. Complete the project 
1. Commit and Push your changes to your fork
1. Submit a Pull Request back to the assignment repo
1. Paste a link to your Pull Request (not your fork!) on Canvas and submit

## Inspiration

 Look [here](https://classicreload.com/zork-i.html) and [here](http://www.bbc.co.uk/programmes/articles/1g84m0sXpnNCv84GpN2PLZG/the-hitchhikers-guide-to-the-galaxy-game-30th-anniversary-edition) for a couple examples of the genre.  Be creative with your app. Apps will be evaluated by the following criteria:   

## Technical requirements:

* Your command line app must run with no errors or warnings
* Have at least 10 opportunities for the user to make decisions
* Have at least one opportunity where the user will enter a number
* Use both Switch statements and If/Else Statements
* Use a for loop in your code
* Use a while loop in your code

## Hints:

- This project imports an npm module called `readline-sync` that allows the user to enter input to the terminal. The line at the top: `const readline = require('readline-sync')` gives you access to this functionality

- Use the following line to get user input:

```js
let yourVariableHere = readline.question("Enter your name: ")
```

## Rubric

![textBasedAdventureRubric.png](./textBasedAdventureRubric.png)

