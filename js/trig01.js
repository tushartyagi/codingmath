window.onload = function() {
    var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight;

  // Move the y-axis down by `height / 2`
  context.translate(0, height / 2);

  // Reverse the y axis so that we see the usual sine wave
  // which increases then decreases
  context.scale(1, -1);
  
  for(var angle = 0; angle < 2 * Math.PI ; angle += 0.01) {
    // multiply by some constant so that the values spread out
    var x = angle * 200,
        y = Math.sin(angle) * 200;

    context.fillRect(x, y, 5, 5);
  }
    
}
