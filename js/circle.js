window.onload = function() {
  var canvas  = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width   = canvas.width = window.innerWidth,
      height  = canvas.height = window.innerHeight;

  var cy     = height * 0.5,
      cx     = width  * 0.5,
      radius = 200,
      speed  = 0.02, // speed of change of angle
      angle  = 0;

  render();
  
  function render() {
    context.clearRect(0, 0, width, height);
    
    var x = cx + radius * Math.cos(angle),
        y = cy + radius * Math.sin(angle);
    
    context.beginPath();

    // x, y, radius, startAngle, endAngle, anticlockwise
    context.arc(x, y, 10, 0, Math.PI * 2, false);
    context.fill();
    
    angle += speed;

    requestAnimationFrame(render);
  }

}
