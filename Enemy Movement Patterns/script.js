//init
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
CANVAS_WIDTH = canvas.width = 500;
CANVAS_HEIGHT = canvas.height = 1000;
let numberOfEnemis = 39;
const enemisArray = [];

let gameFrame = 0;
// enemy1 = {
//   x: 10,
//   y: 50,
//   width: 100,
//   height: 50,
// };

class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "./enemies/enemy3.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 3; //109
    this.height = this.spriteHeight / 3; //88
    this.speed = Math.random() * 4 - 10;
    this.x = Math.random() * (canvas.width - this.width); //282;
    this.y = Math.random() * (canvas.height - this.height); //833;
    this.newX = Math.random() * (canvas.width - this.width);
    this.newY = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.intreval = Math.floor(Math.random() * 200 + 50);
  }
  update() {
    if (gameFrame % 100 === 0) {
      this.newX = Math.random() * (canvas.width - this.width);
      this.newY = Math.random() * (canvas.height - this.height);
    }
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;
    this.x -= dx / 70;
    this.y -= dy / 70;
    // this.x = 0;
    // this.y = 0;
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) this.x = canvas.width;
    console.log(Math.random() * 10);

    //animate sprites
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

//const enemy1 = new Enemy()

for (let i = 0; i < numberOfEnemis; i++) {
  enemisArray.push(new Enemy());
}

const enemy1 = new Enemy();
const enemy2 = new Enemy();
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  enemisArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
