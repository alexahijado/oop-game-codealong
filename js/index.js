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
    })
}, 20);

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        return player.moveLeft()
    } else if (event.code === "ArrowRight") {
        return player.moveRight()
    }
});