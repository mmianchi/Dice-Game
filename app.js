
let scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6 + 1);

document.querySelector('#current-' + activePlayer).textContent = dice;
document.querySelector('.dice').style.display = 'none';

let d = document.getElementById('score-'+ activePlayer ).textContent;
d += dice;

// const btnHold = document.querySelector('.btn-hold');
// const btnRoll = document.querySelector('.btn-roll');


// let score0 = document.querySelector('#score-0');
// let name0 = document.querySelector('#name-0');
// let current0 = document.querySelector('#current-0');

// let score1 = document.querySelector('#score-1');
// let name1 = document.querySelector('#name-1');
// let current1 = document.querySelector('#current-1');

// btnRoll.addEventListener('click', rolling);
// btnHold.addEventListener('click', holding);

// //every img is related to one score
// let dice = document.querySelector('.dice').src 
// var x = Math.floor(Math.random() * 6 + 1);
// console.log(x)
// function rolling(e){
//   //chose random
  
//   //add it to related player score unless more than 1 

//   //if score is 1 then reset current and change player

//   //if score> 100 related player = winner

//   e.preventDefault();
// }

// function holding(e) {
  
//   // add it to related score

//   // change current to zero

//   // change player 

//   e.preventDefault();
// }
