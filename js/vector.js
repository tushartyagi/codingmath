var vector = {
    _x: 1,
    _y: 0,

    create: function(x, y) {
        var o = Object.create(this);
        o.setX(x);
        o.setY(y);
        return o;
    },
    
    setX: function(value) {
        this._x = value;
    },

    getX: function() {
        return this._x;
    },

    setY: function(value) {
        this._y = value;
    },

    getY: function() {
        return this._y;
    },

    setAngle: function(angle) {
        var length = this.getLength();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    },

    getAngle: function() {
        return Math.atan2(this._y, this._x);
    },

    setLength: function(length) {
        var angle = this.getAngle();
        this._x = Math.cos(angle) * length;
        this._y = Math.sin(angle) * length;
    },
    
    getLength: function() {
        return Math.sqrt(this._x * this._x + this._y * this._y);
    },

    add: function(other) {
        return vector.create(this._x + other.getX(), this._y + other.getY());
    },

    subtract: function(other) {
        return vector.create(this._x - other.getX(), this._y - other.getY());
    },

    multiply: function(value) {
        return vector.create(this._x * value, this._y * value);
    },
    
    divide: function(value) {
        return vector.create(this._x / value, this._y  / value);
    }
}
