var points = 0;
var voldemort = false;
var numOfClicks = 0;
var moves = document.getElementById("moves");
var guiMessage = document.getElementById('welcome');
var compareArr = [];
var boxes = [];
var responseList = document.querySelectorAll('.beadedBag');

for(var response in responseList) {
  responseList[response].addEventListener('click', runGame);
  boxes.push(responseList[response]);
}

function flipTiles(clickedTile){
  if(voldemort  === false && !clickedTile.classList.contains("beadedBag")){
    clickedTile.parentNode.classList.add('flip');
  }
}

function moveCounter(){
  var moveNum = parseFloat(moves.innerHTML);
  moves.innerHTML = moveNum - 0.5;
  moveNum = moves.innerHTML;
  if(moveNum < 0){
    guiMessage.innerHTML = "Game Over! Voledmort Wins!";
    voldemort = true;
    moves.innerHTML = "0";
  }
}

function saveGameState (clickedTile){
  if(clickedTile.classList.contains('backGobletOfFire')){
    compareArr.push('gobletOfFire');
  } else if (clickedTile.classList.contains('backTriwizardCup')){
    compareArr.push('triwizardCup');
  } else if (clickedTile.classList.contains('backHungarianHorntail')){
    compareArr.push('hungarianHorntail');
  } else if (clickedTile.classList.contains('backMadEye')){
      compareArr.push('madEye');
  } else if (clickedTile.classList.contains('backBeauxbaton')){
      compareArr.push('beauxbaton');
  } else if (clickedTile.classList.contains('backMermaid')){
    compareArr.push('mermaid');
  } else if (clickedTile.classList.contains('backEgg')){
    compareArr.push('egg');
  } else if (clickedTile.classList.contains('backFerret')){
    compareArr.push('ferret');
  } else if (clickedTile.classList.contains('backRitaSkeeter')){
    compareArr.push('ritaSkeeter');
  } else if (clickedTile.classList.contains('backMark')){
    compareArr.push('mark');
  } else if (clickedTile.classList.contains('backDurmstrang')){
    compareArr.push('durmstrang');
  } else if (clickedTile.classList.contains('backWormtail')){
    compareArr.push('wormtail');
  } else if (clickedTile.classList.contains('backDeadDiggory')){
    compareArr.push('deadDiggory');
  } else if (clickedTile.classList.contains('backMaze')){
    compareArr.push('maze');
  } else if (clickedTile.classList.contains('backYuleBall')){
    compareArr.push('yuleBall');
  } else if (clickedTile.classList.contains('backJr')){
    compareArr.push('jr');
  } else if (clickedTile.classList.contains('backGillyweed')){
    compareArr.push('gillyweed');
  } else if (clickedTile.classList.contains('backDeathEater')){
    compareArr.push('deathEater');
  } else {
    console.log("not working");}
}

  function checkMatch(){
    if(compareArr.length >= 2){
      if(compareArr[0] === compareArr[1]){
        switch (compareArr[0]){
          case "gobletOfFire":  var gobletOfFireStylingArr =  document.getElementsByClassName("backGobletOfFire");
              gobletOfFireStylingArr[0].style.visibility="hidden";
              gobletOfFireStylingArr[1].style.visibility="hidden";
          var gobletOfFireStylingArr2 = document.getElementsByClassName("gobletOfFire");
              gobletOfFireStylingArr2[0].style.visibility="hidden";
              gobletOfFireStylingArr2[1].style.visibility="hidden";
              break;
          case "triwizardCup": var triwizardCupStylingArr = document.getElementsByClassName("backTriwizardCup");
              triwizardCupStylingArr[0].style.visibility="hidden";
              triwizardCupStylingArr[1].style.visibility="hidden";
          var triwizardCupStylingArr2 = document.getElementsByClassName("triwizardCup");
              triwizardCupStylingArr2[0].style.visibility="hidden";
              triwizardCupStylingArr2[1].style.visibility="hidden";
              break;
            case "hungarianHorntail": var hungarianHorntailStylingArr = document.getElementsByClassName("backHungarianHorntail");
              hungarianHorntailStylingArr[0].style.visibility="hidden";
              hungarianHorntailStylingArr[1].style.visibility="hidden";
          var hungarianHorntailStylingArr2 = document.getElementsByClassName("hungarianHorntail");
              hungarianHorntailStylingArr2[0].style.visibility="hidden";
              hungarianHorntailStylingArr2[1].style.visibility="hidden";
              break;
          case "madEye": var madEyeStylingArr = document.getElementsByClassName("backMadEye");
                madEyeStylingArr[0].style.visibility="hidden";
                madEyeStylingArr[1].style.visibility="hidden";
          var madEyeStylingArr2 = document.getElementsByClassName("madEye");
                madEyeStylingArr2[0].style.visibility="hidden";
                madEyeStylingArr2[1].style.visibility="hidden";
                break;
          case "beauxbaton": var beauxbatonStylingArr = document.getElementsByClassName("backBeauxbaton");
                beauxbatonStylingArr[0].style.visibility="hidden";
                beauxbatonStylingArr[1].style.visibility="hidden";
          var beauxbatonStylingArr2 = document.getElementsByClassName("beauxbaton");
                beauxbatonStylingArr2[0].style.visibility="hidden";
                beauxbatonStylingArr2[1].style.visibility="hidden";
                break;
          case "mermaid": var mermaidStylingArr =  document.getElementsByClassName("backMermaid");
              mermaidStylingArr[0].style.visibility="hidden";
              mermaidStylingArr[1].style.visibility="hidden";
          var mermaidStylingArr2 = document.getElementsByClassName("mermaid");
              mermaidStylingArr2[0].style.visibility="hidden";
              mermaidStylingArr2[1].style.visibility="hidden";
              break;
          case "egg": var eggStylingArr =  document.getElementsByClassName("backEgg");
              eggStylingArr[0].style.visibility="hidden";
              eggStylingArr[1].style.visibility="hidden";
          var eggStylingArr2 = document.getElementsByClassName("egg");
              eggStylingArr2[0].style.visibility="hidden";
              eggStylingArr2[1].style.visibility="hidden";
              break;
          case "ferret": var ferretStylingArr =  document.getElementsByClassName("backFerret");
              ferretStylingArr[0].style.visibility="hidden";
              ferretStylingArr[1].style.visibility="hidden";
          var ferretStylingArr2 = document.getElementsByClassName("ferret");
              ferretStylingArr2[0].style.visibility="hidden";
              ferretStylingArr2[1].style.visibility="hidden";
              break;
          case "ritaSkeeter": var ritaSkeeterStylingArr =  document.getElementsByClassName("backRitaSkeeter");
              ritaSkeeterStylingArr[0].style.visibility="hidden";
              ritaSkeeterStylingArr[1].style.visibility="hidden";
          var ritaSkeeterStylingArr2 = document.getElementsByClassName("ritaSkeeter");
              ritaSkeeterStylingArr2[0].style.visibility="hidden";
              ritaSkeeterStylingArr2[1].style.visibility="hidden";
              break;
          case "mark": var markStylingArr =  document.getElementsByClassName("backMark");
              markStylingArr[0].style.visibility="hidden";
              markStylingArr[1].style.visibility="hidden";
          var markStylingArr2 = document.getElementsByClassName("mark");
              markStylingArr2[0].style.visibility="hidden";
              markStylingArr2[1].style.visibility="hidden";
              break;
          case "durmstrang": var durmstrangStylingArr =  document.getElementsByClassName("backDurmstrang");
              durmstrangStylingArr[0].style.visibility="hidden";
              durmstrangStylingArr[1].style.visibility="hidden";
          var durmstrangStylingArr2 = document.getElementsByClassName("durmstrang");
              durmstrangStylingArr2[0].style.visibility="hidden";
              durmstrangStylingArr2[1].style.visibility="hidden";
              break;
          case "wormtail": var wormtailStylingArr =  document.getElementsByClassName("backWormtail");
              wormtailStylingArr[0].style.visibility="hidden";
              wormtailStylingArr[1].style.visibility="hidden";
          var wormtailStylingArr2 = document.getElementsByClassName("wormtail");
              wormtailStylingArr2[0].style.visibility="hidden";
              wormtailStylingArr2[1].style.visibility="hidden";
              break;
          case "deadDiggory": var deadDiggoryStylingArr =  document.getElementsByClassName("backDeadDiggory");
              deadDiggoryStylingArr[0].style.visibility="hidden";
              deadDiggoryStylingArr[1].style.visibility="hidden";
          var deadDiggoryStylingArr2 = document.getElementsByClassName("deadDiggory");
              deadDiggoryStylingArr2[0].style.visibility="hidden";
              deadDiggoryStylingArr2[1].style.visibility="hidden";
              break;
          case "maze": var mazeStylingArr =  document.getElementsByClassName("backMaze");
              mazeStylingArr[0].style.visibility="hidden";
              mazeStylingArr[1].style.visibility="hidden";
          var mazeStylingArr2 = document.getElementsByClassName("maze");
              mazeStylingArr2[0].style.visibility="hidden";
              mazeStylingArr2[1].style.visibility="hidden";
              break;
          case "yuleBall": var yuleBallStylingArr =  document.getElementsByClassName("backYuleBall");
              yuleBallStylingArr[0].style.visibility="hidden";
              yuleBallStylingArr[1].style.visibility="hidden";
          var yuleBallStylingArr2 = document.getElementsByClassName("yuleBall");
              yuleBallStylingArr2[0].style.visibility="hidden";
              yuleBallStylingArr2[1].style.visibility="hidden";
              break;
          case "jr": var jrStylingArr =  document.getElementsByClassName("backJr");
              jrStylingArr[0].style.visibility="hidden";
              jrStylingArr[1].style.visibility="hidden";
          var jrStylingArr2 = document.getElementsByClassName("jr");
              jrStylingArr2[0].style.visibility="hidden";
              jrStylingArr2[1].style.visibility="hidden";
              break;
          case "gillyweed": var gillyweedStylingArr =  document.getElementsByClassName("backGillyweed");
              gillyweedStylingArr[0].style.visibility="hidden";
              gillyweedStylingArr[1].style.visibility="hidden";
          var gillyweedStylingArr2 = document.getElementsByClassName("gillyweed");
              gillyweedStylingArr2[0].style.visibility="hidden";
              gillyweedStylingArr2[1].style.visibility="hidden";
              break;
          case "deathEater": var deathEaterStylingArr =  document.getElementsByClassName("backDeathEater");
              deathEaterStylingArr[0].style.visibility="hidden";
              deathEaterStylingArr[1].style.visibility="hidden";
          var deathEaterStylingArr2 = document.getElementsByClassName("deathEater");
              deathEaterStylingArr2[0].style.visibility="hidden";
              deathEaterStylingArr2[1].style.visibility="hidden";
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
      console.log("after arr clear", compareArr);
    }
  }

  function removeFlip(){
    for(var i = 0; i < boxes.length; i++){
      boxes[i].classList.remove('flip');
    }
    compareArr = [];
  }

  function checkWin(){
    if(points === 18 && voldemort === false){
      console.log("saveGameState check", compareArr);
      guiMessage.innerHTML = "Congrats! You Win! Currently there arent any more levels but check back soon!"
    }
  }

  function runGame(evt){
    if(compareArr.length < 2){
      numOfClicks++;
      flipTiles(evt.target);
      moveCounter(evt.target);
      saveGameState(evt.target);
      checkMatch();
      checkWin();
    }
  }