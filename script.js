const game = document.querySelector('#game');
const buttons = document.querySelector('button');

const playResult = document.querySelector('.result');
const score = document.querySelector('.score');
const endResult = document.querySelector('.endResult');

let computerSelection = ["Rock", "Paper", "Scissors"];

function computerPlay(){
  let random = (Math.floor(Math.random() * computerSelection.length));
  
  if (random == 0){
    computerSelection = "Rock";
  } else if (random == 1){
    computerSelection = "Paper";
  } else if(random == 2){
    computerSelection = "Scissors";
  }
  computerSelection.toLowerCase();
}

computerPlay();