window.onload = function() {
  var canvas  = document.getElementById("canvas"),
      context = canvas.getContext("2d"),
      width   = canvas.width = window.innerWidth,
      height  = canvas.height = window.innerHeight;

  var centerY     = height * 0.5,
      centerX     = width  * 0.5,
      baseRadius  = 100,

      offset = 50,
      speed  = 0.1,
      angle  = 0;

  render();
  
  function render() {
    // sin returns [-1,1] so the second expression returns
    // a value from [-offset, offset]. The entire expression
    // moves the value around centerY +- offset.
    var radius = baseRadius + Math.sin(angle) * offset;

    context.clearRect(0, 0, width, height);
    context.beginPath();

    // x, y, radius, startAngle, endAngle, anticlockwise
    context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
    context.fill();
    
    angle += speed;

    requestAnimationFrame(render);
  }

}
