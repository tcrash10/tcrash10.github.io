/**************************  Pong Self Playing Game (Decoration) ***************************
Purpose: Decoration for webpage showing a Morris (the cat) playing Benji (the dog) in a
         friendly game of retro (1970s) pong. Stop(pause) and Start button is for the user.

o Define the global variables (2 paddles) and a getRandomInt function
o function newBall creates the ball and initiates the game via function Initiate
o function draw creates the ball and paddles and submits functions for their action
o ballAction and rectAction create the animated movement illusion and include collision
  action with the walls and each other.
o function updateScore occurs when the ball passes a player's paddle. New data displayed.
o function endGame occurs when one player reaches 15 and a 2 goal lead. New data displayed. 
o Initiate begins a new game with a short delay.
o function winHistory updates & displays overall record via the local storage variable.
o function stopStart allows the user to pause the game, and restart if desired
 */

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var cat = document.getElementById("cat");
var dog = document.getElementById("dog");
var summary = document.getElementById("sum");
function getRandomInt(min, max) {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  // return Math.floor(Math.random() * (max - min)) + min; 
  return Math.floor(Math.random()*(max-min+1)+min);
}
function stopStart(e) {
    e.preventDefault();
    if (el.firstChild.nodeValue == "Stop Game") {
    clearInterval(initInterval);
    console.log(el.firstChild.nodeValue);
    el.firstChild.nodeValue = "Start Game";
    } else if (el.firstChild.nodeValue == "Start Game") {
    newBall();
    console.log(el.firstChild.nodeValue);
    el.firstChild.nodeValue = "Stop Game";
  }
}
var el = document.getElementById("stop");
el.addEventListener("click", function(event) {
  if (!event) event = window.event;
  stopStart(event);
  }
  , false);

function newBall() {
if (gameOver) updateScore("reset");
el.firstChild.nodeValue = "Stop Game";
dog.classList.remove("winner");
cat.classList.remove("winner");
cx = c.width/2;
cy = getRandomInt(10,c.height-10);
cr = 6;
dx = 2;
if (getRandomInt(2,3) == 2) {dx = -dx;}
dy = -2;
gameOver = false;
setTimeout(function() {
  Initiate();
}, 1000);
}

var cf = "#0095DD";
var cx, cy, cr, dx, dy, initInterval;
var rect1w = 8, rect1l = 120, rect2w = 8, rect2l = 120;
var randInt1 = getRandomInt(1,(c.height/2 - (rect1l/2))*2);
var randInt2 = getRandomInt(1,(c.height/2 - (rect1l/2))*2);
var startPos = [20, c.width - 28, randInt1, randInt2];
var endPos = [0, 1];
var r1y = 1, r2y = 1;
var rect1x = startPos[0], rect1y = startPos[2];
var rect2x = startPos[1], rect2y = startPos[3];
var catScore = 0, dogScore = 0;
var gameOver = false;
var catWins = 0, dogWins = 0;

newBall();

function winHistory() {
  var histText = "Morris has " + catWins.toString(10) + " and Benji has " + dogWins.toString(10);
  document.getElementById("cat-Winners").textContent = histText;
}

function drawball(x,y,r,fill) {
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI*2);
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.closePath();
}
function drawRect(x,y,w,l) {
  ctx.fillStyle="#000000";
  ctx.fillRect(x, y, w, l);
}

function draw() {
  
   ctx.clearRect(0, 0, c.width, c.height);
   drawball(cx,cy,cr,cf);
   drawRect(rect1x, rect1y, rect1w, rect1l);
   drawRect(rect2x, rect2y, rect2w, rect2l);
   ballAction();
   rectAction();
}

function ballAction() {
      if ((cy + dy > (c.height - cr)) || (cy + dy < cr)) {
      dy = -dy;
      }
      if (cx + dx > (c.width - cr)) {
      dx = -dx;
      }
      if (((cx - cr) == startPos[0] + rect1w) && (cy >= rect1y && cy <= (rect1y + rect1l))) {
          dx = -dx;
      }
      if (((cx + cr) == startPos[1]) && (cy >= rect2y && cy <= (rect2y + rect2l))) {
          dx = -dx;
      }
      if (((cx - cr) == startPos[0] + rect1w) && ((cy == (rect1y - 2) && dy > 0) ||
        (cy == (rect1y + rect1l + 2) && dy < 0))) {
          dx = -dx;
          dy = -dy;
      }
      if (((cx + cr) == startPos[1]) && ((cy == (rect2y - 2) && dy > 0) ||
        (cy == (rect2y + rect2l + 2) && dy < 0))) {
          dx = -dx;
          dy = -dy;
      }
      if (cx - cr <= 2) {
        updateScore("Dog");
          if (dogScore >= 15 && (dogScore - catScore) >= 2) {
            endGame("Dog");
            return;
          }
        clearInterval(initInterval);
        newBall();
      }
      if (cx + cr >= c.width - 2) {
        updateScore("Cat");
        if (catScore >= 15 && (catScore - dogScore) >= 2) {
          endGame("Cat");
          return;
        }
        clearInterval(initInterval);
        newBall();
      }
    cx += dx;
    cy += dy;
}

function rectAction() {  
    if (rect1y < endPos[1] || (rect1y + rect1l) >= c.height ) {
        r1y = -r1y;
        }
    rect1y += r1y;
    if (rect2y < endPos[1] || (rect2y + rect2l) >= c.height ) {
        r2y = -r2y;
        }
    rect2y += r2y;
}

function updateScore(player) {
  if (player == "Cat") {
    catScore +=1;
  } else if (player == "Dog") {
    dogScore +=1;
  } else {
    dogScore = 0;
    catScore = 0;
    summary.innerHTML = "15 win by 2";
  }
  cat.innerHTML = catScore;
  dog.innerHTML = dogScore;
}

function Initiate() {
console.log("initiated");
initInterval = setInterval(draw,20);
}

function endGame(winner) {
  gameOver = true;
  clearInterval(initInterval);
  el.firstChild.nodeValue = "Start Game";
  var msg = winner + " Takes it! ";
  if (winner == "Cat") {
    cat.classList.add("winner");
    catWins +=1;
    winHistory();
    } else if (winner == "Dog"){
    dog.classList.add("winner");
    dogWins +=1;
    winHistory();
    } else {
    msg = "No winner";
  }
  summary.innerHTML = msg;
  setTimeout(function() {
  newBall();
}, 1000);
}

