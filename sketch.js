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
var dog0;
var dog1;
var dog2;
var dog3;
var dog4;
var dogs = [];
var button;

function preload() {

  parkBackground = loadImage('images/dogpark.png')
  introdogs = loadImage(`images/park.jpg`);

  for (let i = 0; i < 9; i++) {
    dogs[i] = loadImage(`images/dog` + i + `.png`);


  }
  // dog0 = loadImage(`images/dog0.jpg`);
  // dog1 = loadImage(`images/dog1.jpg`);
  // dog2 = loadImage(`images/dog2.jpg`);
  // dog3 = loadImage(`images/dog3.jpg`);
  // dog4 = loadImage(`images/dog4.jpg`);
}

function setup() {
  createCanvas(1000, 600);
  background(parkBackground);
  textStyle(BOLD);
  textSize(42);
  button = createButton("Name a Dog!");
  button.mousePressed(clickButton);
  button.class("randomButton");
  button.position(width * .39, height * 1);
}

function draw() {

}

function drawDogIntro() {

  image(introdogs, width * .1, height * .2);

}


function drawDog0() {
  image(dog0, width * .1, height * .1)

}

function drawDog1() {
  image(dog1, width * .1, height * .1)

}

function drawDog2() {
  image(dog2, width * .13, height * .1)

}

function drawDog3() {
  image(dog3, width * .1, height * .15)

}

function drawDog4() {
  image(dog4, width * .09, height * .2)

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
