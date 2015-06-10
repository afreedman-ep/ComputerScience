//points that count up to victory
var points = 0;
//Voldemort is a loss condition
var voldemort = false;
//counts up to loss
var numOfClicks = 0;
var moves = document.getElementById("moves");
var guiMessage = document.getElementById('welcome');
//array used to compare face up cards
var compareArr = [];
var boxes = [];
var responseList = document.querySelectorAll('.beadedBag');
var randomArr = [0, 1, 2, 3, 4, 5, 6, 7, 8];
for(var response in responseList) {
  responseList[response].addEventListener('click', runGame);
  boxes.push(responseList[response]);
}
//this adds class of flip the tiles if they are clicked
function flipTiles(clickedTile){
  if(voldemort  === false && !clickedTile.classList.contains("beadedBag")){
    clickedTile.parentNode.classList.add('flip');
    numOfClicks++;
  }
}
//this function ends the game when the player is out of moves
function moveCounter(){
  var moveNum = parseFloat(moves.innerHTML);
  moves.innerHTML = moveNum - 0.5;  moveNum = moves.innerHTML;
  if(moveNum < 0){
    guiMessage.innerHTML = "Game Over! Voledmort Wins!";
    moves.innerHTML = "0"
    voldemort = true;
  }
}
//this fucntion registers the identity of flipped tiles to an array
function saveGameState (clickedTile){
  if(clickedTile.classList.contains('backMirror')){
    compareArr.push('mirror');
  } else if (clickedTile.classList.contains('backHat')){
    compareArr.push('hat');
  } else if (clickedTile.classList.contains('backBaby')){
    compareArr.push('baby');
  } else if (clickedTile.classList.contains('backFluffy')){
    compareArr.push('fluffy');
  } else if (clickedTile.classList.contains('backStone')){
    compareArr.push('stone');
  } else {
  }
}
//this function checks for mathces inbetween cards that are face up
function checkMatch(){
  if(compareArr.length >= 2){
    if(compareArr[0] === compareArr[1]){
      switch (compareArr[0]){
        case "mirror":  var mirrorStylingArr =  document.getElementsByClassName("backMirror");
        mirrorStylingArr[0].style.visibility="hidden";
        mirrorStylingArr[1].style.visibility="hidden";
        var mirrorStylingArr2 = document.getElementsByClassName("mirror");
        mirrorStylingArr2[0].style.visibility="hidden";
        mirrorStylingArr2[1].style.visibility="hidden";
        break;
        case "hat": var hatStylingArr = document.getElementsByClassName("backHat");
        hatStylingArr[0].style.visibility="hidden";
        hatStylingArr[1].style.visibility="hidden";
        var hatStylingArr2 = document.getElementsByClassName("hat");
        hatStylingArr2[0].style.visibility="hidden";
        hatStylingArr2[1].style.visibility="hidden";
        break;
        case "baby": var babyStylingArr =  document.getElementsByClassName("backBaby");
        babyStylingArr[0].style.visibility="hidden";
        babyStylingArr[1].style.visibility="hidden";
        var babyStylingArr2 = document.getElementsByClassName("baby");
        babyStylingArr2[0].style.visibility="hidden";
        babyStylingArr2[1].style.visibility="hidden";
        break;
        case "fluffy": var fluffyStylingArr =  document.getElementsByClassName("backFluffy");
        fluffyStylingArr[0].style.visibility="hidden";
        fluffyStylingArr[1].style.visibility="hidden";
        var fluffyStylingArr2 = document.getElementsByClassName("fluffy");
        fluffyStylingArr2[0].style.visibility="hidden";
        fluffyStylingArr2[1].style.visibility="hidden";
        break;
        default:
          console.log("Chris is the Anti-Chris");
        }
        points += 1;
      }
      else{
        window.setTimeout(removeFlip, 1500);
      }
      compareArr = [];
    }
  }
//this function unflips cards
  function removeFlip(){
    for(var i = 0; i < boxes.length; i++){
      boxes[i].classList.remove('flip');
    }
    compareArr = [];
  }
//this function checks for a win condition based on point acrued
  function checkWin(){
    if(points === 4 && voldemort === false){
      guiMessage.innerHTML = "Congrats! You Win! Click <a href=\"chamsec.html\">here</a> to continue to Book Two!";
    }
  }
//this function is the heart of the game and runs on every click
  function runGame(evt){
    if(compareArr.length < 2){
      //numOfClicks++;
      flipTiles(evt.target);
      moveCounter(evt.target);
      saveGameState(evt.target);
      checkMatch();
      checkWin();
    }
  }
  //this function generates random numbers between 0-8 and never repeaths them
  function shuffle(arrae){
    for(var i = 0; i < arrae.length; i++){
      var num = arrae.length - 2;
      if (num < 0){
        return arrae[0]
      }
      var randomInt = arrae[Math.floor(Math.random()*num)];
      var x = arrae.indexOf(randomInt);
      arrae.splice(x, 1);
      return randomInt;
    }
  }
  //this function removes classes
  function removeClass(arrOfNum, klass){
    arrOfNum.classList.remove(klass);
  }
  //this function adds classes
  function addClass(arrOfNum, klass){
    arrOfNum.classList.add(klass);
  }
  //this function randomizes the game
  function randomGame(){
    var tileArr = document.getElementsByClassName("tile");
    var backArr = document.getElementsByClassName("back");
    for (var i = 0; i < tileArr.length; i++){
      removeClass(tileArr[i], "mirror");
      removeClass(tileArr[i], "hat");
      removeClass(tileArr[i], "baby");
      removeClass(tileArr[i], "stone");
      removeClass(tileArr[i], "fluffy");
      removeClass(backArr[i], "backMirror");
      removeClass(backArr[i], "backHat");
      removeClass(backArr[i], "backBaby");
      removeClass(backArr[i], "backStone");
      removeClass(backArr[i], "backFluffy");
      switch (shuffle(randomArr)){
        case 0:
          addClass(tileArr[i], "mirror");
          addClass(backArr[i], "backMirror");
          break;
        case 1:
          addClass(tileArr[i], "hat");
          addClass(backArr[i], "backHat");
          break;
        case 2:
          addClass(tileArr[i], "baby");
          addClass(backArr[i], "backBaby");
          break;
        case 3:
          addClass(tileArr[i], "stone");
          addClass(backArr[i], "backStone");
          break;
        case 4:
          addClass(tileArr[i], "fluffy");
          addClass(backArr[i], "backFluffy");
          break;
        case 5:
          addClass(tileArr[i], "hat");
          addClass(backArr[i], "backHat");
          break;
        case 6:
          addClass(tileArr[i], "baby");
          addClass(backArr[i], "backBaby");
          break;
        case 7:
          addClass(tileArr[i], "mirror");
          addClass(backArr[i], "backMirror");
          break;
        case 8:
          addClass(tileArr[i], "fluffy");
          addClass(backArr[i], "backFluffy");
          break;
    }
 }

}