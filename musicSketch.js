let img;
let box1;
let oriya; 
let colours = [];
let text1 = "ok";

function preload() {

}

function setup() {
    createCanvas(windowWidth*2, 10);
    oriya = loadFont('assets/oriya/oriya.ttf');
    colours[0] = color(255,226,119);
    box1 = new Box(0,0,100,100, colours[0], text1);
}

function draw() {
    ellipse(1440, 620, 80, 80);
    
    box1.over();
    box1.update();
    box1.draw();

}

function mousePressed() {
    box1.pressed();
    box1.pressed();
}

function mouseReleased() {
    box1.released();
    box1.released();
}


class Box {
    constructor(x, y, width, height, colour, text) {
        this.x = x;
        this.y = y;
        this.w = width;
        this.h = height;
        this.c = colour;
        this.offsetX = 0;
        this.offsetY = 0;
        this.dragging = false;
        this.rollover = false;
        this.text = text;

        this.padding = 10;
    }

    close() {

    }

    over() {
        // Is mouse over object
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
          this.rollover = true;
        } else {
          this.rollover = false;
        }
    }

    update() {
        // adjust location
        if (this.dragging) {
            this.x = mouseX + this.offsetX;
            this.y = mouseY + this.offsetY;
        }
    }
    
    draw() {
        
        push();

        noStroke(0);
        fill(this.c);
        
        rect(this.x, this.y, this.w, this.h);
        fill(color(0,0,15))
        textSize(14);
        text(this.text, this.x + this.padding, this.y + 15 + this.padding,
            this.w - this.padding, this.h);


        // draw bar
        // strokeWeight(3);
        fill(this.c);
        stroke(150,150,150);
        strokeWeight(1);
        rect(this.x+this.w-15, this.y, 15, 15);

        pop();
    }
    
    pressed() {
        // Did I click on the rectangle?
        if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y + this.h) {
          this.dragging = true;
          // If so, keep track of relative location of click to corner of rectangle
          this.offsetX = this.x - mouseX;
          this.offsetY = this.y - mouseY;
        }
    }
    
    released() {
        // Quit dragging
        this.dragging = false;
    } 
}