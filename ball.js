function Ball(_x,_y){
  this.pos = {
    x:_x,
    y:_y
  }
  this.radius = 10;
  this.init = function(){
    var canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    rotate(0,this.pos.x,this.pos.y,this.ctx);
  }

  function rotate(i,x,y,ctx){
    length = 170
    var degree = (2*Math.PI)/360*i;
    var move_x = (length-10) * Math.cos(degree);
    var move_y = (length-10) * Math.sin(degree);

    ctx.beginPath();
    ctx.arc(x+move_x, y+move_y, 10, 0, 2 * Math.PI, false);
    ctx.fillStyle = 'white';
    ctx.fill();
    
  }

  var i = 0;
  this.redraw = function(){
    i+=5;
    i%=360;
    rotate(i,this.pos.x,this.pos.y,this.ctx);
  };
  
  this.getColor = function(){
    return 'hsl(' + i + ', 100%, 50%)';
  }

  this.init();
  
}