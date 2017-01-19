window.onload = function() {
    var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
        particles = [],
        numParticles = 200,
        accel = vector.create(0, 0.01);

    for(var i = 0; i < numParticles; i++) {
        var p = particle.create(width / 2,
                                height / 2,
                                Math.random() * 6 + 1,
                                Math.random() * Math.PI * 2, 0.1);
        particles.push(p);
    }

    update();

    function update() {
        context.clearRect(0, 0, width, height);

        for(var i = 0; i < numParticles; i++) {

            var p = particles[i];

            context.beginPath();
            p.accelerate(accel);
            context.arc(p.position.getX(), p.position.getY(), 5, 0, Math.PI * 2, false);
            context.fill();

            p.update();
        }

        requestAnimationFrame(update);
    }
}
