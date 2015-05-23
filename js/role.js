var player ={
  block:5,
  maxHeight:200,
  x:100,
  y:500-25,
  jump_y:0,
  jump: function() {
    player.jump_y += player.block;
    player.y -= player.block;

    if(player.jump_y < player.maxHeight){
      setTimeout(function(){
        player.jump();
      },10)
    }else {
      player.jump_y=0;
      player.drop();
    }
  },
  drop: function() {
    
  },
  moveLeft: function(){
    player.x -= player.block;
  },
  moveRight: function() {
    player.x += player.block;
    
  }
}

var laser = {
  x:300,
  y:300
}