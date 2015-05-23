var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
cp = new ColorPicker(200,250);
ball = new Ball(200,250);
bc = new BarChart(600,430);

var output_canvas = document.getElementById('output');
var output_ctx = output_canvas.getContext('2d');
output_ctx.clearRect ( 0 , 0 , output_canvas.width, output_canvas.height );
output = new Output(80,500);

function redraw(){
  ctx.clearRect ( 0 , 0 , canvas.width, canvas.height );
  output_ctx.clearRect ( 0 , 0 , output_canvas.width, output_canvas.height );
  cp.draw();
  ball.redraw();
  bc.redraw();
  output.redraw();
}

setInterval(function(){
  redraw();
},60);


output = new Output(80,500);

$('#pickButton').on('click',function(){
  color = ball.getColor();
  length = bc.getLength();

  output.drop(color,length);
});

$('#clearButton').on('click',function(){
  output_ctx.clearRect ( 0 , 0 , output_canvas.width, output_canvas.height );
  output = new Output(80,500);
})