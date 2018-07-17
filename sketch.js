let x = 10;
let y = 10;
let xspeed = 10;
let yspeed = 10;

function setup() {
    createCanvas(windowWidth, windowHeight);
   x = random(windowWidth);
   y = random(windowHeight);
}



function draw() {
    background(0, 180, 0);
	//distance from center of the screen
	const d = dist(windowWidth/2, windowHeight/2);

  	
  	ellipse (x, y, 150, 150);

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > windowWidth || x < 0)  {
         xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	} 
    

}

function mouseClicked() {
    let distance = dist(mouseX, mouseY, x, y)

    if (distance <= 150) {
        fill(random(0, 225), random(0, 225), random(0, 225));
    }
}

function accelerationX() {
    if (x => windowWidth) {
        xspeed++;
    }
}

function accelerationY() {
    if (x => windowHeight) {
        yspeed++;
    }
}