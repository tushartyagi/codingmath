window.onload = function() {
    var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
        particles = [],
        numParticles = 100;

    for(var i = 0; i < numParticles; i++) {
        var p = particle.create(width / 2,
                                height / 2,
                                Math.random() * 4 + 1,
                                Math.random() * Math.PI * 2)
        particles.push(p);
    }

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        for(var i = 0; i < numParticles; i++) {

            var p = particles[i];

            context.beginPath();
            context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
            context.fill();

            p.update();
        }

        requestAnimationFrame(update);
    }
}
