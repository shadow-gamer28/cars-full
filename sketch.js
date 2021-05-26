var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
var track, racecar1, racecar2, racecar3, racecar4;

function preload(){
  track = loadImage("images/track.jpg");
  racecar1 = loadImage("images/car1.png");
  racecar2 = loadImage("images/car2.png");
  racecar3 = loadImage("images/car3.png");
  racecar4 = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  yVel = 0
  xVel = 0
  xSet = 0
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
