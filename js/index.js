class Player {
    constructor () {
        this.positionX = 50;
        this.positionY = 0;
        this.width = 10;
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
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
}

const player = new Player();

document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowLeft") {
        return player.moveLeft()
    } else if (event.code === "ArrowRight") {
        return player.moveRight()
    }
});