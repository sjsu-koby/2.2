// dogs I have met
var dognames = [{
  name: "Oscar"
}, {
  name: "Kandy"
}, {
  name: "Stella"
}, {
  name: "Nalla"
}, {
  name: "Rigby"
}, {
  name: "Harley"
}, {
  name: "Kiera"
}, {
  name: "Baxter"
}, {
  name: "Snow"
}, {
  name: "Gizmo"
}];

var randomImage;
var randomIndex;
var counter = 0;
var introdogs;
var parkBackground;
var dogs = [];
var button;
var artButton;

function preload() {

  parkBackground = loadImage('images/dogpark.png')
  introdogs = loadImage(`images/park.jpg`);

  for (let i = 0; i < 9; i++) {
    dogs[i] = loadImage(`images/dog` + i + `.png`);


  }

}

function setup() {
  createCanvas(1000, 600);
  background(parkBackground);
  textStyle(BOLD);
  textSize(42);
  // button = createButton("Name a Dog!");
  button = select("#randomButton")
  button.mousePressed(clickButton);
  button.class("randomButton");
  button.position(width * .39, height * 1);
  artButton = select("#artistButton");
  artButton.class("artistButton");
  artButton.position(width * .44, height * 1.2);
}

function draw() {

}

function drawDogIntro() {

  image(introdogs, width * .1, height * .2);

}

function clickButton() {
  if (dognames[0]) {
    background(introdogs);
    randomIndex = int(random(dognames.length));
    fill(255, 255, 255);
    text(dognames[randomIndex].name, width * .44, height * .98);
    randomImage = int(random(dogs.length));
    image(dogs[randomImage], width * .1, height * .1);
    dognames.splice(randomIndex, 0);
  }
}
