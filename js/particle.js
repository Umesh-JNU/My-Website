// set particle property
const particleProperty = {
    number    : 100,
    size      : 2.5,
    speed     : 1,
    color     : ['#124611fc',"#864e05fd","#612a5cfd","#abcd54"],
    lineColor : ['#124611fc',"#864e05fd","#612a5cfd","#abcd54"],
    lineThick : 0.3
}
// particle array
let particleArray;
// Canvas
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
context.canvas.height = window.innerHeight;
context.canvas.width = window.innerWidth;

// create constructor function for particles
function Particle(x, y, directionX, directionY, size, color) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.color = color;
    this.size = size;
}

// particle update method
Particle.prototype.update = function() {
    if (this.x + this.size*2 > canvas.width || this.x - this.size*2 < 0) {
        this.directionX = -this.directionX;
    }
    if (this.y + this.size*2 > canvas.height || this.y - this.size*2 < 0) {
        this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
}

// create particle array
function init() {
    particleArray = [];
    if (window.innerWidth <= 400) {
        particleProperty.number = 50;
    }

    for(let i=0; i<particleProperty.number; i++) {
        let size = Math.random() * particleProperty.size;
        let x = Math.random()*(innerWidth - 2*size);
        let y = Math.random()*(innerHeight- 2*size);
        let directionX = (Math.random() * particleProperty.speed);
        let directionY = (Math.random() * particleProperty.speed);
        let color = particleProperty.color[Math.floor(Math.random() * 4)];

        particleArray.push(new Particle(x, y, directionX, directionY, size, color));
    }
}

// animation loop
function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (let i=0; i<particleProperty.number; i++){
        particleArray[i].update();
    }
    
}
init();
animate();