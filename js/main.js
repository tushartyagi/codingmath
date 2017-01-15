window.onload = function() {
    var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
        position = vector.create(100, 100);


    update();

    function update() {
        context.clearRect(0, 0, width, height);

        context.beginPath();
        context.fillArc(position.getX(), position.getY(), 10, 0, Math.PI * 2, false);

        requestAnimationFrame(update);
    }
}
