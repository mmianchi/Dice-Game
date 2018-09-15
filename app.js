
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


document.querySelector('.btn-roll').addEventListener('click' , function(){

  var dice = Math.floor(Math.random() * 6 + 1);
  document.querySelector('#current-' + activePlayer).textContent = dice;

  var diceDom = document.querySelector('.dice')
  //first change to block and cancle ivisible then give it a value
  diceDom.style.display = 'block';
  diceDom.src = 'dice-' + dice + '.png';
  

  if (dice !== 1){
    roundScore += dice;
    document.querySelector('#current-'+ activePlayer).textContent = roundScore;
  } else {
    //change player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0

    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');

  }
});