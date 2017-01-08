window.onload = function() {
  var canvas  = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width   = canvas.width = window.innerWidth,
      height  = canvas.height = window.innerHeight;

  var cy     = height * 0.5,
      cx     = width  * 0.5,
      radius = 100,
      offset = 50,
      speed  = 0.1, // speed of change of angle
      angle  = 0;

  render();
  
  function render() {
    // sin returns [-1,1] so the second expression returns
    // a value from [-offset, offset]. The entire expression
    // moves the value around centerY +- offset.
    var radius = baseRadius + Math.sin(angle) * offset;
    
    var x = cx + radius * Math.cos(angle),
        y = cy + radius * Math.sin(angle);
    
    context.clearRect(0, 0, width, height);
    context.beginPath();

    // x, y, radius, startAngle, endAngle, anticlockwise
    context.arc(cx, cy, 10, 0, Math.PI * 2, false);
    context.fill();
    
    angle += speed;

    requestAnimationFrame(render);
  }

}
