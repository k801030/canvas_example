function ColorPicker(_x,_y){
  this.pos = {
    x:_x,
    y:_y
  }
  this.radius = 50;
  this.length = 180;
  this.colorCode = null;

  this.init = function(){
    var canvas = document.getElementById('canvas');
    this.ctx = canvas.getContext('2d');
    this.draw();
  }

  this.draw = function(){
    
    for(var i=0;i<360;i+=0.1){
      var degree = (2*Math.PI)/360*i;
      this.ctx.strokeStyle = 'hsl(' + i + ', 100%, 50%)';
      this.ctx.beginPath();
      
      var move_x = this.length * Math.cos(degree);
      var move_y = this.length * Math.sin(degree);
      this.ctx.moveTo(this.pos.x+move_x*0.8, this.pos.y+move_y*0.8);
      this.ctx.lineTo(this.pos.x+move_x, this.pos.y+move_y);
      this.ctx.stroke();
    }
  }

  this.init();
}