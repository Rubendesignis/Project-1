var seed = Math.random() * 1000;
var k = 1,
	l = 0.8;
var th = 0,
	seg = 0.015;
var r;
let angle;
let colors1 = "9AC2C5-#ECCE8E-02546cBF-eafc70b3-02b06c82"
	.split("-")
	.map((a) => "#" + a);
let colors2 = "deFbE4-f7f9fb-02906c-eafc70-02b08c"
	.split("-")
	.map((a) => "#" + a + "00");
let colorbg = "#00C2D1".split("-").map((a) => "#" + a);
let colorbg2 = "01272d20".split("-").map((a) => "#" + a);

function setup() {
	let mySize = min(windowWidth, windowHeight);
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, 200, 150, 100, 100);
	background(0);
	r = mySize;
	angle = random(TAU);
	let G = new makeG();
}

function makeG() {
	randomSeed(seed);
	colorMode(HSB, 200, 150, 100, 100);
	drawingContext.shadowColor = color(0, 3, 8, 15);
	overAllTexture = createGraphics(windowWidth, windowHeight);
	overAllTexture.loadPixels();
	for (var i = 0; i < width; i++) {
		for (var j = 0; j < height; j++) {
			overAllTexture.set(
				i,
				j,
				color(100, 80, 100, noise(i / 3, j / 3, (i * j) / 100) * random(1))
			);
		}
	}
	overAllTexture.updatePixels();
}


function draw() {
	randomSeed(seed);
	background(colorbg2);
	var T = (1 - k) / k;
	noFill();
	push();
	translate(width / 2, height / 2);

	for (let i = 0; i < 30; i += random(1)) {
		k = random(0.75, 0.8);
		l = random(0.45, 0.65);
		strokeWeight(random(20));
		stroke(random(colors1));
		push();
		rotate(random(TAU) + angle);
		ellipseMode(CENTER);
		circle(random(-i * 10, i * 10) + r * ((1 - k) * cos(th) + l * k * cos(T * th)),
			random(-i * 10, i * 10) + r * ((1 - k) * sin(th) - l * k * sin(T * th)),
			random(-r / 4, r / 4),
			random(-r / 2, r / 2));
		pop();
      
	}
	pop();
	th += seg;
	angle += TAU/random(360,220);
	image(overAllTexture, 0, 5);
	if (r > 0) {
		r -= 0.25;
	} else if (r <= 0) {
		r = 0;
	}
   //strokeWeight(2)
  //stroke(random(100,500),random(100,0),random(100,200))
}