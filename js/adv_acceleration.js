window.onload = function() {

    var canvas = document.getElementById("canvas"),
	context = canvas.getContext("2d"),
	width = canvas.width = window.innerWidth,
	height = canvas.height = window.innerHeight,
        thrust = vector.create(0, 0),
        ship = particle.create(width / 4, height / 2, 1, 0),
        angle = 0,
        thrusting = false,
        turningLeft = false,
        turningRight = false;
                               
    update();


    document.body.addEventListener('keydown', function(event) {
        console.log(event.keyCode);
        switch(event.keyCode) {
        case 38: // Up
            thrusting = true;
            break;

        case 37: // Left
            turningLeft = true;
            break;

        case 39: // Right
            turningRight = true;
            break;

        default:
            break;
        }
    });

    document.body.addEventListener('keyup', function(event) {
        //console.log(event.keyCode);
        switch(event.keyCode) {
        case 38: // Up
            thrusting = false;
            break;

        case 37: // Left
            turningLeft = false;
            break;

        case 39: // Right
            turningRight = false;
            break;

        default:
            break;
        }
    });


    function update() {
        context.clearRect(0, 0, width, height);

        ship.update();
        ship.accelerate(thrust);

        context.save();
        context.translate(ship.position.getX(), ship.position.getY());
        context.rotate(angle);
        
        context.beginPath();
        context.moveTo(10, 0);
        context.lineTo(-10, -7);
        context.lineTo(-10, 7);
        context.lineTo(10, 0);
        context.stroke();

        context.restore();

        if (turningLeft) {
            angle -= 0.05;
        }
        if (turningRight) {
            angle += 0.05;
        }

        thrust.setAngle(angle);
        if (thrusting) {
            thrust.setLength(0.1);
        }
        else {
            thrust.setLength(0);
        }
        
        if (ship.position.getX() < 0) {
            ship.position.setX(width);
        }
        if (ship.position.getX() > width) {
            ship.position.setX(0);
        }


        if (ship.position.getY() < 0) {
            ship.position.setY(height);
        }
        if (ship.position.getY() > height) {
            ship.position.setY(0);
        }
        
        
        requestAnimationFrame(update);
    }
}
