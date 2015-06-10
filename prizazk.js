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
  moves.innerHTML = moveNum - 0.5;  moveNum = moves.innerHTML;
  if(moveNum < 0){
    guiMessage.innerHTML = "Game Over! Voledmort Wins!";
    voldemort = true;
    moves.innerHTML = "0";
  }
}

function saveGameState (clickedTile){
  if(clickedTile.classList.contains('backHippogriff')){
    compareArr.push('hippogriff');
  } else if (clickedTile.classList.contains('backMap')){
    compareArr.push('map');
  } else if (clickedTile.classList.contains('backDementor')){
    compareArr.push('dementor');
  } else if (clickedTile.classList.contains('backCadogan')){
      compareArr.push('cadogan');
  } else if (clickedTile.classList.contains('backFatLady')){
      compareArr.push('fatLady');
  } else if (clickedTile.classList.contains('backGrim')){
    compareArr.push('grim');
  } else if (clickedTile.classList.contains('backScabbers')){
    compareArr.push('scabbers');
  } else if (clickedTile.classList.contains('backDog')){
    compareArr.push('dog');
  } else if (clickedTile.classList.contains('backBoggart')){
    compareArr.push('boggart');
  } else if (clickedTile.classList.contains('backMonsterBookOfMonsters')){
    compareArr.push('monsterBookOfMonsters');
  } else if (clickedTile.classList.contains('backTimeTurner')){
    compareArr.push('timeTurner');
  } else if (clickedTile.classList.contains('backPatronus')){
    compareArr.push('patronus');
  } else if (clickedTile.classList.contains('backAuntMarge')){
    compareArr.push('auntMarge');
  } else {
    console.log("not working");}
}

  function checkMatch(){
    if(compareArr.length >= 2){
      if(compareArr[0] === compareArr[1]){
        switch (compareArr[0]){
          case "hippogriff":  var hippogriffStylingArr =  document.getElementsByClassName("backHippogriff");
              hippogriffStylingArr[0].style.visibility="hidden";
              hippogriffStylingArr[1].style.visibility="hidden";
          var hippogriffStylingArr2 = document.getElementsByClassName("hippogriff");
              hippogriffStylingArr2[0].style.visibility="hidden";
              hippogriffStylingArr2[1].style.visibility="hidden";
              break;
          case "map": var mapStylingArr = document.getElementsByClassName("backMap");
              mapStylingArr[0].style.visibility="hidden";
              mapStylingArr[1].style.visibility="hidden";
          var mapStylingArr2 = document.getElementsByClassName("map");
              mapStylingArr2[0].style.visibility="hidden";
              mapStylingArr2[1].style.visibility="hidden";
              break;
            case "dementor": var dementorStylingArr = document.getElementsByClassName("backDementor");
              dementorStylingArr[0].style.visibility="hidden";
              dementorStylingArr[1].style.visibility="hidden";
          var dementorStylingArr2 = document.getElementsByClassName("dementor");
              dementorStylingArr2[0].style.visibility="hidden";
              dementorStylingArr2[1].style.visibility="hidden";
              break;
          case "cadogan": var cadoganStylingArr = document.getElementsByClassName("backCadogan");
                cadoganStylingArr[0].style.visibility="hidden";
                cadoganStylingArr[1].style.visibility="hidden";
          var cadoganStylingArr2 = document.getElementsByClassName("cadogan");
                cadoganStylingArr2[0].style.visibility="hidden";
                cadoganStylingArr2[1].style.visibility="hidden";
                break;
          case "fatLady": var fatLadyStylingArr = document.getElementsByClassName("backFatLady");
                fatLadyStylingArr[0].style.visibility="hidden";
                fatLadyStylingArr[1].style.visibility="hidden";
          var fatLadyStylingArr2 = document.getElementsByClassName("fatLady");
                fatLadyStylingArr2[0].style.visibility="hidden";
                fatLadyStylingArr2[1].style.visibility="hidden";
                break;
          case "scabbers": var scabbersStylingArr =  document.getElementsByClassName("backScabbers");
              scabbersStylingArr[0].style.visibility="hidden";
              scabbersStylingArr[1].style.visibility="hidden";
          var scabbersStylingArr2 = document.getElementsByClassName("scabbers");
              scabbersStylingArr2[0].style.visibility="hidden";
              scabbersStylingArr2[1].style.visibility="hidden";
              break;
          case "grim": var grimStylingArr =  document.getElementsByClassName("backGrim");
              grimStylingArr[0].style.visibility="hidden";
              grimStylingArr[1].style.visibility="hidden";
          var grimStylingArr2 = document.getElementsByClassName("grim");
              grimStylingArr2[0].style.visibility="hidden";
              grimStylingArr2[1].style.visibility="hidden";
              break;
          case "dog": var dogStylingArr =  document.getElementsByClassName("backDog");
              dogStylingArr[0].style.visibility="hidden";
              dogStylingArr[1].style.visibility="hidden";
          var dogStylingArr2 = document.getElementsByClassName("dog");
              dogStylingArr2[0].style.visibility="hidden";
              dogStylingArr2[1].style.visibility="hidden";
              break;
          case "boggart": var boggartStylingArr =  document.getElementsByClassName("backBoggart");
              boggartStylingArr[0].style.visibility="hidden";
              boggartStylingArr[1].style.visibility="hidden";
          var boggartStylingArr2 = document.getElementsByClassName("boggart");
              boggartStylingArr2[0].style.visibility="hidden";
              boggartStylingArr2[1].style.visibility="hidden";
              break;
          case "monsterBookOfMonsters": var monsterBookOfMonstersStylingArr =  document.getElementsByClassName("backMonsterBookOfMonsters");
              monsterBookOfMonstersStylingArr[0].style.visibility="hidden";
              monsterBookOfMonstersStylingArr[1].style.visibility="hidden";
          var monsterBookOfMonstersStylingArr2 = document.getElementsByClassName("monsterBookOfMonsters");
              monsterBookOfMonstersStylingArr2[0].style.visibility="hidden";
              monsterBookOfMonstersStylingArr2[1].style.visibility="hidden";
              break;
          case "timeTurner": var timeTurnerStylingArr =  document.getElementsByClassName("backTimeTurner");
              timeTurnerStylingArr[0].style.visibility="hidden";
              timeTurnerStylingArr[1].style.visibility="hidden";
          var timeTurnerStylingArr2 = document.getElementsByClassName("timeTurner");
              timeTurnerStylingArr2[0].style.visibility="hidden";
              timeTurnerStylingArr2[1].style.visibility="hidden";
              break;
          case "patronus": var patronusStylingArr =  document.getElementsByClassName("backPatronus");
              patronusStylingArr[0].style.visibility="hidden";
              patronusStylingArr[1].style.visibility="hidden";
          var patronusStylingArr2 = document.getElementsByClassName("patronus");
              patronusStylingArr2[0].style.visibility="hidden";
              patronusStylingArr2[1].style.visibility="hidden";
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
    if(points === 12 && voldemort === false){
      console.log("saveGameState check", compareArr);
      guiMessage.innerHTML = "Congrats! You Win! Click <a href=\"gobfir.html\">here</a> to continue to Book Four!"
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