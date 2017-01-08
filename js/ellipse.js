window.onload = function() {
  var canvas  = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width   = canvas.width = window.innerWidth,
      height  = canvas.height = window.innerHeight;

  var cy      = height * 0.5,
      cx      = width  * 0.5,
      xRadius = 200,
      yRadius = 300,
      speed   = 0.02, // speed of change of angle
      angle   = 0;

  render();
  
  function render() {
    context.clearRect(0, 0, width, height);
    
    var x = cx + xRadius * Math.cos(angle),
        y = cy + yRadius * Math.sin(angle);
    
    context.beginPath();

    // x, y, radius, startAngle, endAngle, anticlockwise
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fill();
    
    angle += speed;

    requestAnimationFrame(render);
  }

}
