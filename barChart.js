function BarChart(_x,_y){
  var pos = {
    x:_x,
    y:_y
  }
  var maxLength = 360;
  var width = 90;
  var ctx = null;
  var init = function(){
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    move(0,1);
  }

  function move(length,i){
    var canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    ctx.strokeStyle = '#aaa';
    ctx.strokeRect(pos.x,pos.y, width, -length);
    
  }
  
  var i = 1;
  var length = 0;
  this.redraw = function(){
    
    
    length+=12*i;
    if(length>maxLength)
      i = -i;
    else if(length<0)
      i = -i;
    move(length,i);
  };
  
  this.getLength = function(){
    return length;
  }

  init();
}