var points = 0;
var voldemort = false;
var numOfClicks = 0;
var moves = document.getElementById("moves");
var guiMessage = document.getElementById('welcome');
var compareArr = [];
var boxes = [];
var responseList = document.querySelectorAll('.beadedBag');
var randomArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
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
  if(clickedTile.classList.contains('backPhoenix')){
    compareArr.push('phoenix');
  } else if (clickedTile.classList.contains('backAcromantula')){
    compareArr.push('acromantula');
  } else if (clickedTile.classList.contains('backDobby')){
    compareArr.push('dobby');
  } else if (clickedTile.classList.contains('backMyrtle')){
    compareArr.push('myrtle');
  } else if (clickedTile.classList.contains('backWillow')){
    compareArr.push('willow');
  } else if (clickedTile.classList.contains('backBasilisk')){
    compareArr.push('basilisk');
  } else if (clickedTile.classList.contains('backDiary')){
    compareArr.push('diary');
  } else if (clickedTile.classList.contains('backCar')){
    compareArr.push('car');
  } else {
    console.log("not working");}
  }

  function checkMatch(){
    if(compareArr.length >= 2){
      if(compareArr[0] === compareArr[1]){
        switch (compareArr[0]){
          case "phoenix":  var phoenixStylingArr =  document.getElementsByClassName("backPhoenix");
          phoenixStylingArr[0].style.visibility="hidden";
          phoenixStylingArr[1].style.visibility="hidden";
          var phoenixStylingArr2 = document.getElementsByClassName("phoenix");
          phoenixStylingArr2[0].style.visibility="hidden";
          phoenixStylingArr2[1].style.visibility="hidden";
          break;
          case "acromantula": var acromantulaStylingArr = document.getElementsByClassName("backAcromantula");
          acromantulaStylingArr[0].style.visibility="hidden";
          acromantulaStylingArr[1].style.visibility="hidden";
          var acromantulaStylingArr2 = document.getElementsByClassName("acromantula");
          acromantulaStylingArr2[0].style.visibility="hidden";
          acromantulaStylingArr2[1].style.visibility="hidden";
          break;
          case "dobby": var dobbyStylingArr = document.getElementsByClassName("backDobby");
          dobbyStylingArr[0].style.visibility="hidden";
          dobbyStylingArr[1].style.visibility="hidden";
          var dobbyStylingArr2 = document.getElementsByClassName("dobby");
          dobbyStylingArr2[0].style.visibility="hidden";
          dobbyStylingArr2[1].style.visibility="hidden";
          break;
          case "myrtle": var myrtleStylingArr = document.getElementsByClassName("backMyrtle");
          myrtleStylingArr[0].style.visibility="hidden";
          myrtleStylingArr[1].style.visibility="hidden";
          var myrtleStylingArr2 = document.getElementsByClassName("myrtle");
          myrtleStylingArr2[0].style.visibility="hidden";
          myrtleStylingArr2[1].style.visibility="hidden";
          break;
          case "willow": var willowStylingArr = document.getElementsByClassName("backWillow");
          willowStylingArr[0].style.visibility="hidden";
          willowStylingArr[1].style.visibility="hidden";
          var willowStylingArr2 = document.getElementsByClassName("willow");
          willowStylingArr2[0].style.visibility="hidden";
          willowStylingArr2[1].style.visibility="hidden";
          break;
          case "car": var carStylingArr =  document.getElementsByClassName("backCar");
          carStylingArr[0].style.visibility="hidden";
          carStylingArr[1].style.visibility="hidden";
          var carStylingArr2 = document.getElementsByClassName("car");
          carStylingArr2[0].style.visibility="hidden";
          carStylingArr2[1].style.visibility="hidden";
          break;
          case "basilisk": var basiliskStylingArr =  document.getElementsByClassName("backBasilisk");
          basiliskStylingArr[0].style.visibility="hidden";
          basiliskStylingArr[1].style.visibility="hidden";
          var basiliskStylingArr2 = document.getElementsByClassName("basilisk");
          basiliskStylingArr2[0].style.visibility="hidden";
          basiliskStylingArr2[1].style.visibility="hidden";
          break;
          case "diary": var diaryStylingArr =  document.getElementsByClassName("backDiary");
          diaryStylingArr[0].style.visibility="hidden";
          diaryStylingArr[1].style.visibility="hidden";
          var diaryStylingArr2 = document.getElementsByClassName("diary");
          diaryStylingArr2[0].style.visibility="hidden";
          diaryStylingArr2[1].style.visibility="hidden";
          break;
          default:
            console.log("Chris is the Anti-Chris");
          }
          points += 1
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
      if(points === 8 && voldemort === false){
        console.log("saveGameState check", compareArr);
        guiMessage.innerHTML = "Congrats! You Win! Click <a href=\"prizazk.html\">here</a> to continue to Book Three!"
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
    function shuffle(arrae){
      for(var i = 0; i < arrae.length; i++){
        var num = arrae.length - 2;
        if (num < 0){
          return arrae[0]
        }
        console.log(randomInt)
        console.log(arrae)
        var randomInt = arrae[Math.floor(Math.random()*num)];
        var x = arrae.indexOf(randomInt);
        arrae.splice(x, 1);
        return randomInt;
      }
    }
    function removeClass(arrOfNum, klass){
      arrOfNum.classList.remove(klass);
    }
    function addClass(arrOfNum, klass){
      arrOfNum.classList.add(klass);
    }
    function randomGame(){
      var tileArr = document.getElementsByClassName("tile");
      var backArr = document.getElementsByClassName("back");
      for (var i = 0; i < tileArr.length; i++){
        removeClass(tileArr[i], "phoenix");
        removeClass(tileArr[i], "acromantula");
        removeClass(tileArr[i], "dobby");
        removeClass(tileArr[i], "myrtle");
        removeClass(tileArr[i], "willow");
        removeClass(backArr[i], "basilisk");
        removeClass(backArr[i], "diary");
        removeClass(backArr[i], "car");
        removeClass(backArr[i], "backPhoenix");
        removeClass(backArr[i], "backAcromantula");
        removeClass(backArr[i], "backDobby");
        removeClass(backArr[i], "backMyrtle");
        removeClass(backArr[i], "backWillow");
        removeClass(backArr[i], "backBasilisk");
        removeClass(backArr[i], "backDiary");
        removeClass(backArr[i], "backCar");
        switch (shuffle(randomArr)){
          case 0:
            addClass(tileArr[i], "phoenix");
            addClass(backArr[i], "backPhoenix");
            break;
            case 1:
              addClass(tileArr[i], "acromantula");
              addClass(backArr[i], "backAcromantula");
              break;
              case 2:
                addClass(tileArr[i], "dobby");
                addClass(backArr[i], "backDobby");
                break;
                case 3:
                  addClass(tileArr[i], "car");
                  addClass(backArr[i], "backCar");
                  break;
                  case 4:
                    addClass(tileArr[i], "myrtle");
                    addClass(backArr[i], "backMyrtle");
                    break;
                    case 5:
                      addClass(tileArr[i], "acromantula");
                      addClass(backArr[i], "backAcromantula");
                      break;
                      case 6:
                        addClass(tileArr[i], "dobby");
                        addClass(backArr[i], "backDobby");
                        break;
                        case 7:
                          addClass(tileArr[i], "phoenix");
                          addClass(backArr[i], "backPhoenix");
                          break;
                          case 8:
                            addClass(tileArr[i], "myrtle");
                            addClass(backArr[i], "backMyrtle");
                            break;
                            case 9:
                              addClass(tileArr[i], "willow");
                              addClass(backArr[i], "backWillow");
                              break;
                              case 10:
                                addClass(tileArr[i], "basilisk");
                                addClass(backArr[i], "backBasilisk");
                                break;
                                case 11:
                                  addClass(tileArr[i], "diary");
                                  addClass(backArr[i], "backDiary");
                                  break;
                                  case 12:
                                    addClass(tileArr[i], "willow");
                                    addClass(backArr[i], "backWillow");
                                    break;
                                    case 13:
                                      addClass(tileArr[i], "basilisk");
                                      addClass(backArr[i], "backBasilisk");
                                      break;
                                      case 14:
                                        addClass(tileArr[i], "car");
                                        addClass(backArr[i], "backCar");
                                        break;
                                        case 15:
                                          addClass(tileArr[i], "myrtle");
                                          addClass(backArr[i], "backmyrtle");
                                          break;
                                        }
                                      }
                                    }