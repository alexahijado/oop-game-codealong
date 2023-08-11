class Player {
    constructor () {
        this.width = 20;
        this.height = 10;
        this.positionX = 50 - (this.width / 2);
        this.positionY = 0;
        this.domElement = null;

        this.createDomElement();
    }
    createDomElement() {
        //create DOM element
        this.domElement = document.createElement("div");
        //set id
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        //append to the DOM
        const parentElement = document.getElementById("board");
        parentElement.appendChild(this.domElement);
    }
    moveLeft(){
        this.positionX -= 2;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX += 2;
        this.domElement.style.left = this.positionX + "vw";
    }
}

class Obstacle {
    constructor(){
        this.width = 5;
        this.height = 5;
        this.positionX = Math.floor(Math.random()*(100-this.width + 1));
        this.positionY = 100;
        this.domElement = null;

        this.createDomElement();
    }

    createDomElement() {
        //create DOM element
        this.domElement = document.createElement("div");
        //set id
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.left = this.positionX + "vw";
        this.domElement.style.bottom = this.positionY + "vh";
        //append to the DOM
        const parentElement = document.getElementById("board");
        parentElement.appendChild(this.domElement);

    }

    moveDown(){
        this.positionY -= 0.5;
        this.domElement.style.bottom = this.positionY + "vh";
    }

    
}

const player = new Player();
const obstacleOne = new Obstacle();

const obstaclesArr = []

//create obstacles
setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle);
}, 2000);

//move all obstacles
setInterval(() => {
    obstaclesArr.forEach(function(obstacleInstance){

        //move
        obstacleInstance.moveDown();

        //remove if it reaches the bottom
        if (obstacleInstance.positionY < 0 - obstacleInstance.height) {
            obstacleInstance.domElement.remove(); //remove from the DOM
        }

        //detect collision
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
          ) {
            // Collision detected!
            console.log("GAME OVER");
            location.href = "./gameover.html";
          }
    })
}, 20);

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        return player.moveLeft()
    } else if (event.code === "ArrowRight") {
        return player.moveRight()
    }
});