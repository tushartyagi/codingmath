window.onload = function() {

    // Override the other actual particle
    var particle = {
        position: null,
        velocity: null,

        create: function(x, y, speed, direction, grav) {
            var obj = Object.create(this);
            obj.position = vector.create(x, y);
            obj.velocity = vector.create(0, 0);
            obj.velocity.setLength(speed);
            obj.velocity.setAngle(direction);
            return obj;
        },

        update: function() {
            this.position.addTo(this.velocity);
        },

        accelerate: function(acc) {
            this.velocity.addTo(acc);
        }
    };

    var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
        accel = vector.create(0.1, 0.1)
        p = particle.create(width / 4,
                            height / 2,
                            Math.random() * 6 + 1,
                            -(Math.PI / 2));


    update();

    function update() {
        context.clearRect(0, 0, width, height);
        context.beginPath();

        p.accelerate(accel);
        context.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
        context.fill();
        p.update();

        requestAnimationFrame(update);
    }
}
