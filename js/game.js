class Game {
    constructor(){

        }

 

getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }



  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    p1 = createSprite(1000,200);
    p1.addImage(player1Img)
    p2 = createSprite(200,200);
    p2.addImage(playerImg)
    players = [p1, p2];

    tree = createSprite(300,650)
    tree.addImage(treeImg)
   sandbag = createSprite(200,100)
   sandbag.addImage(sandbagImg)
   house = createSprite(500,300)
   house.addImage(houseImg)

   l1 = createSprite(50,50)
   l1.addImage(livesImg)
   l2 = createSprite(100,50)
   l2.addImage(livesImg)
   l3 = createSprite(150,50)
   l3.addImage(livesImg)
   l4 = createSprite(950,50)
   l4.addImage(livesImg)
   l5 = createSprite(900,50)
   l5.addImage(livesImg)
   l6 = createSprite(850,50)
   l6.addImage(livesImg)

   l1.scale=0.2
   l2.scale=0.2
   l3.scale=0.2
   l4.scale=0.2
   l5.scale=0.2
   l6.scale=0.2

   
   


  }

play(){

    form.hide()
    background(bgImg)
  var index = 0
  for(var plr in players){
  index= index+1
   if(index===player.index){
     player.x=players[plr].x
     player.y=players[plr].y
   }

    if(keyDown(LEFT_ARROW) && player.index !== null){
      player.x -=10
      player.update();
    }

    if(keyDown(RIGHT_ARROW) && player.index !== null){
      player.y +=10
      player.update();
    }

    if(keyDown(UP_ARROW) && player.index !== null){
      player.y -=10
      player.update();
    }

    if(keyDown(DOWN_ARROW) && player.index !== null){
      player.y +=10
      player.update();
    }

    if(keyWentDown("space")){
      bullet= createSprite(players.x, players.y,70,20)
      if(player.x<displayWidth/2){
      bullet.velocityX=10
      }
      else{
        bullet.velocityX=-10
      }

      bulletGroup.add(bullet)

    }

  }

 drawSprites()

}

}