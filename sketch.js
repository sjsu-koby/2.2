// dogs I have met
var dognames = [{
  name: "Kira"
}, {
  name: "Kandy"
}, {
  name: "Stella"
}, {
  name: "Nalla"
}, {
  name: "Holy"
}];

var randomImage;
var randomIndex;
var counter = 0;
var introdogs;
var dog0;
var dog1;
var dog2;
var dog3;
var dog4;
var dogs = [];
var dog = random(dogs);

function preload() {

  introdogs = loadImage(`images/multipledogs.jpg`);

  for (let i = 0; i < 5; i++) {
    dogs[i] = loadImage(`images/dog` + i + `.jpg`);
  }
  // dog0 = loadImage(`images/dog0.jpg`);
  // dog1 = loadImage(`images/dog1.jpg`);
  // dog2 = loadImage(`images/dog2.jpg`);
  // dog3 = loadImage(`images/dog3.jpg`);
  // dog4 = loadImage(`images/dog4.jpg`);
}

function setup() {
  createCanvas(600, 600);
  background(0, 225, 255);
  drawDogIntro();
  textSize(32);
  text("Name the Dogs!", width * .3, height * .18);

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

function mousePressed() {
  if (dognames[0]) {
    background(0, 225, 255);
    randomIndex = int(random(dognames.length));
    text(dognames[randomIndex].name, width * .43, height * .99);
    randomImage = int(random(dogs.length));
    image(dogs[randomImage], width * .1, height * .1);
    dognames.splice(randomIndex, 0);
  }
}
