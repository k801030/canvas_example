function Output(_x,_y){
  var pos = {
    x:_x,
    y:_y
  }
  var maxLength = 360;
  var width = 40;
  var canvas = null;
  var ctx = null;
  var offset = _y;
  var bars = [];

  var init = function(){
    canvas = document.getElementById('output');
    ctx = canvas.getContext('2d');
  }

  
  this.redraw = function(color,length,i,end){
    var canvas = document.getElementById('output');
    ctx = canvas.getContext('2d');
    
    for(var i=0;i<bars.length;i++){
      ctx.fillStyle = bars[i].color;
      ctx.fillRect(pos.x,bars[i].pos, width, -bars[i].length);
      if(bars[i].pos<bars[i].offset+bars[i].length){
        bars[i].pos+=10;
      }else {
        bars[i].pos = bars[i].offset+bars[i].length;
      }
    }
    
    
    
  };
  
  this.drop = function(color,length){
    realLength = length/9*4;
    //draw(color,realLength,0,offset);
    offset -= realLength;
    var bar = {
      color:color,
      length:realLength,
      pos:0,
      offset:offset
    }
    bars.push(bar);
  }

  this.getLength = function(){
    return length;
  }
  
  init();
}