function Output(_x,_y){
  var pos = {
    x:_x,
    y:_y
  }
  var maxLength = 360;
  var width = 40;
  var ctx = null;
  var offset = _y;


  var init = function(){
    var canvas = document.getElementById('output');
    ctx = canvas.getContext('2d');
  }

  
  this.draw = function(color,length){

    var canvas = document.getElementById('output');
    ctx = canvas.getContext('2d');
    
    realLength = length/9*4;
    ctx.fillStyle = color;
    ctx.fillRect(pos.x,offset, width, -realLength);
    
    offset -= realLength;
    console.log(offset);
  };
  
  this.getLength = function(){
    return length;
  }
  
  init();
}