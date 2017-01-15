window.onload = function() {
    var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
        p = particle.create(100, 100, 0.3, Math.PI / 6);

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
        context.fill();


        // Update the position with the velocity vector, i.e. move the circle
        p.update();

        requestAnimationFrame(update);
    }
}
