class Player {
    constructor () {
        this.positionX = 40;
        this.positionY = 0;
        this.width = 20;
        this.height = 10;
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
        this.positionX = 47.5;
        this.positionY = 100;
        this.width = 5;
        this.height = 5;
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
}, 3000);

//move all obstacles
setInterval(() => {
    obstaclesArr.forEach(function(obstacleInstance){
        obstacleInstance.moveDown();

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


/* if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.y + rect1.h > rect2.y
  ) {
    // Collision detected!
    this.color("green");
  } else {
    // No collision
    this.color("blue");
  } */