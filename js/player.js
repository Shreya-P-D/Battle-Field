class Player {
    constructor(){
        this.index = null;
        this.name = null;
        this.lives = 3;
        this.x = 100;
        this.y = 100;

    }

    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",(data)=>{
          playerCount = data.val();
        })
      }
    
      updateCount(count){
        database.ref('/').update({
          playerCount: count
        });
      }
    
      update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
          name:this.name,
          lives:this.lives,
          x: this.x,
          y:this.y
          
        });


      }













}