define(function() {

    // static private var
    var _numEyes = 2;

    // constructor
    var Human = function(name) {

        // public var
        this.name = name;

        // pseudo-protected var
        this._age = 0;
    };

    // instance method
    Human.prototype.walk = function() {
        return this.name + ' is walking';
    };

    Human.prototype.setAge = function(value) {
        this._age = value;
    };

    Human.prototype.getAge = function() {
        return this._age;
    };

    Human.prototype.getNumEyes = function() {
        return _numEyes;
    };

    // class static method
    Human.GET_TYPE = function() {
        return 'biped';
    };

    // class static const
    Human.NUM_LEGS = 2;

    return Human;

});
