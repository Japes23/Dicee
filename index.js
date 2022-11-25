
function randomnumber(){
  player1number = Math.floor(Math.random() * 6) + 1;
  player2number = Math.floor(Math.random() * 6) + 1;
  var player1image = 'images/dice' +player1number+ '.png';
  var player2image = 'images/dice' +player2number+ '.png';
  var player1dice = document.querySelectorAll('img')[0];
  var player2dice = document.querySelectorAll('img')[1];
  player1dice.setAttribute('src', player1image);
  player2dice.setAttribute('src', player2image);

  if (player1number > player2number){
    document.querySelector("h1").innerHTML="Player 1 WINS!";
  }
  else if (player2number > player1number){
    document.querySelector("h1").innerHTML="Player 2 WINS!";
  }
  else{
    document.querySelector("h1").innerHTML="Its a DRAW!";
  }
}

window.addEventListener('load', function(event){
  randomnumber(this.innerHTML);
});
