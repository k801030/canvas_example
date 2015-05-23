drawRoad = function(ctx, x, y, xml){
  // 16 x 10
  var block = 50; // pixels
  var y = 0;

  $(xml).find('Row').each(function(index){

    var row = $(this).text();
    for(var x=0;x<row.length;x++){
      switch(row[x]){
        case "#":
          draw(ctx,x,y);
          //console.log(y);
      }
    }
    y++;
  });
  draw = function(ctx, x, y) {
    ctx.fillStyle = 'gray';
    ctx.fillRect(x*block,y*block,block,block);
  }

}

drawPlayer = function(ctx){
  ctx.beginPath();
  ctx.arc(player.x, player.y, 25, 0, 2 * Math.PI, false);

  ctx.fillStyle = 'black';
  ctx.fill();
}

drawLaser = function(ctx, length, angle){
  ctx.beginPath();
  ctx.moveTo(laser.x, laser.y)
  var move_x = length * Math.cos(angle);
  var move_y = length * Math.sin(angle);

  ctx.lineTo(laser.x+move_x, laser.y+move_y);
  ctx.stroke();
  
}