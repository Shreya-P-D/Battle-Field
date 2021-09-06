
var form;
var player;
var database;
var gameState = 0;
var playerCount;
var p1, p2, players;
var game;
var bgImg;
var player, sandbag, tree, house;
var l1, l2, l3, l4, l5, l6;
var bullet, bulletGroup;


function preload(){
bgImg=loadImage("background.png")
gunImg=loadImage("gun.png")
gunPointerImg=loadImage("gunPointer.png")
playerImg=loadImage("player.png")
sandbagImg=loadImage("sandbag.png")
treeImg=loadImage("tree.png")
houseImg=loadImage("house.png")
player1Img=loadImage("player 1.png")
player2Img=loadImage("player.png")
livesImg=loadImage("lives.png")

}

function setup() {
  createCanvas(displayWidth-30, displayHeight-30);

  database = firebase.database();


game = new Game();
game.getState();
game.start();

}

function draw() {
  background(255,255,255);  

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();


  }

}