const flock = [];
const flockCount = 100;

let alignSlider, cohesionSlider, seperationSlider; 

function setup() {
    createCanvas(720, 500);
    alignSlider = createSlider(0, 5, 1, 0.1);
    cohesionSlider = createSlider(0, 5, 1, 0.1);
    seperationSlider = createSlider(0, 5, 1, 0.1);
    for (let i = 0;i<flockCount;i++){
      flock.push(new Boid());
    }
  }
  
  function draw() {
    background(51);

    for (let boid of flock){
      boid.edges();
      boid.cohesion(flock);
      boid.flock(flock);
      boid.update();
      boid.show();
    }
  }