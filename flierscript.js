
var c=document.getElementById("playScreen");
var ctx=c.getContext("2d");

var playerBulletsArr = [];
var cylonBulletsArr = [];

//this is the player object
var player = {
    hitpoints: 3,
    x: 30,
    y: 100,
    speed: 10,
    img: document.getElementById("player"),
    drawPlayer: function (){
        ctx.drawImage(this.img, this.x, this.y);
    },
    playerMoveSettings: function () {
        if (player.moveRight) {
            player.x = player.x + player.speed;
        }
        if (player.moveLeft) {
            player.x = player.x - player.speed;
        }
        if (player.moveUp) {
            player.y = player.y - player.speed;
        }
        if (player.moveDown) {
            player.y = player.y + player.speed;
        } else {
            //console.log ("playerMoveSettings not working")
        }
    }, 
    moveRight: false,
    moveLeft: false,
    moveUp: false,
    moveDown: false,
    playerHit: false,
    playerShoot: function () { 
        playerBulletsArr.push(new Bullet(player.x, player.y, "red", "right"));
    }
};


//this is the cylon object
var cylon = {
    x: 660,
    y: 100,
    speed: 10,
    img: document.getElementById("cylon"),
    drawCylon: function(){
        ctx.drawImage(this.img, this.x, this.y);
    },
    cylonMoveSettings: function () {
        if (cylon.moveRight) {
            cylon.x = cylon.x + cylon.speed;
        }
        if (cylon.moveLeft) {
            cylon.x = cylon.x - cylon.speed;
        }
        if (cylon.moveUp) {
            cylon.y = cylon.y - cylon.speed;
        }
        if (cylon.moveDown) {
            cylon.y = cylon.y + cylon.speed;
        } else {
            //console.log ("cylonMoveSettings not working")
        }
    }, 
    moveRight: false,
    moveLeft: false,
    moveUp: false,
    moveDown: false,
    cylonHit: false,
    cylonShoot: function () { 
        cylonBulletsArr.push(new Bullet(cylon.x, cylon.y, "green", "left"));
    }
};

function Bullet (xPos, yPos, bulletColor, bulletDirection){
    this.xPos = xPos + 50;
    this.yPos = yPos + 35;
    this.color = bulletColor;
    this.direction = bulletDirection;
    //determines how the bullets move based on the bulletDirection argument
    this.move = function (){
        if (bulletDirection === "right") {
            this.xPos += 10;
        } else {
            this.xPos -= 10
        }   
    }
    //draws the bullets
    this.draw = function (){
      ctx.beginPath();
      ctx.rect(this.xPos, this.yPos, 10, 5);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
    
}

document.onkeydown = function mover (evt) {
    switch(evt.keyCode) {
    //PLAYER MOVEMENTS
        //moves player right
        case 68:
            player.moveRight = true;
            break;
        //moves player left
        case 65:
            player.moveLeft = true;
            break;
        //moves player up
        case 87: 
            player.moveUp = true;
            break;
        //moves player down
        case 83:
            player.moveDown = true;
            break;
    //PLAYER SHOOTING
        //runs the playerShoot function
        case 70:
            player.playerShoot();
            break;
    //CYLON MOVEMENTS
        //moves cylon right
        case 76:
            cylon.moveRight = true;
            break;
        //moves cylon left
        case 74:
            cylon.moveLeft = true;
            break;
        //moves cylon up
        case 73:
            cylon.moveUp = true;
            break;
        //moves cylon down
        case 75:
            cylon.moveDown = true;
            break;
    //CYLON SHOOTING
        //runs the cylonShoot function
        case 72:
            cylon.cylonShoot();
            break;
        default:
        console.log("mover funtion not working");
    }
};

document.onkeyup = function stopMover (evt){
    switch(evt.keyCode) {
    //STOPS PLAYER MOVEMENTS    
        //stops moving player right
        case 68:
            player.moveRight = false;
            break;
        //stops moving player left
        case 65:
            player.moveLeft = false;
            break;
        //stops moving player up
        case 87: 
            player.moveUp = false;
            break;
        //stops moving player down
        case 83:
            player.moveDown = false;
            break;
    //STOPS CYLON MOVEMENTS
        //stops moving cylon right
        case 76:
            cylon.moveRight = false;
            break;
        //stops moving cylon left
        case 74:
            cylon.moveLeft = false;
            break;
        //stops moving cylon up
        case 73: 
            cylon.moveUp = false;
            break;
        //stops moving cylon down
        case 75:
            cylon.moveDown = false;
            break;
        default:
            //console.log("stopMover function not working");
    }   
}


function bulletCheck () {
    //checks the player bullets for hitting the cylon ship or for exiting the playscreen
    for (i = 0; i < playerBulletsArr.length; i++){
        //checks the cylon ship for hits and removes the bullets that hit the ship
        if (cylon.x < playerBulletsArr[i].xPos && playerBulletsArr[i].xPos < cylon.x + 100 && cylon.y + 70 > playerBulletsArr[i].yPos && cylon.y < playerBulletsArr[i].yPos) {
            cylon.cylonHit = true;
            playerBulletsArr.splice(i,1);
        } //removes the player's bullets after they leave the playscreen 
        else if (playerBulletsArr[i].xPos > playScreen.width){
            playerBulletsArr.splice(i, 1);
        } else {
            //console.log("bulletCheck not working")
        }
    }
    //checks the cylon bulets for hitting the player ship or for exiting the playscreen
    for (i = 0; i < cylonBulletsArr.length; i++){
        //checks the player ship for hits and remove the bullets that hit the ship
        if (player.x - 5 < cylonBulletsArr[i].xPos && cylonBulletsArr[i].xPos < player.x + 100 && player.y + 70 > cylonBulletsArr[i].yPos && player.y < cylonBulletsArr[i].yPos){
            player.playerHit = true;
            cylonBulletsArr.splice(i,1);
        } // removes the cylon's bullets after they leave the playscreen
        else if (cylonBulletsArr[i].xPos < 0) {
            cylonBulletsArr.splice(i, 1);
        } else {
            
        }
    }  
}

function gameplay () {
    //moves the characters
    player.playerMoveSettings();
    cylon.cylonMoveSettings();
    // draws a clear rectangle on top of the canvas to "clear" it
    ctx.clearRect(0, 0, playScreen.width, playScreen.height);
    // draws the characters
    ctx.drawImage(player.img, player.x, player.y, 70, 49);
    ctx.drawImage(cylon.img, cylon.x, cylon.y, 84, 49);
    //this checks to see if the bullets have hit another player or left the playscreen and then removes them
    bulletCheck();
    // Moves and Draws Bullets of both the player and the cylon
    for (i = 0; i < playerBulletsArr.length; i++){
        playerBulletsArr[i].move();
        playerBulletsArr[i].draw(); 
    }
    for (i = 0; i < cylonBulletsArr.length; i++){
        cylonBulletsArr[i].move();
        cylonBulletsArr[i].draw();
    }
}

function runGame (){
    if (player.playerHit === true){
        ctx.drawImage(document.getElementById("cylonWins"), 287, 175, 200, 50);
    } else if (cylon.cylonHit === true){
        ctx.drawImage(document.getElementById("playerWins"), 287, 175, 200, 50)
    } else {
        gameplay();
    }
    // this runs the runGame function over and over again 60 times per second, constantly re-drawing the canvas and player
    window.requestAnimationFrame (runGame);
}

//calls the game
runGame ();
