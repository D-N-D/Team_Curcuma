var movement = function() {
    var keysDown = {};
    
    this.setKeyDown = function(keyCode) {
        keysDown[keyCode] = true;
        return this.keysDown;
    };
    
    this.unSetKeyDown = function(keyCode) {
        delete keysDown[keyCode];
        return this.keysDown;
    };

    this.isKeyDown = function(keyCode) {
        return this.keysDown[keyCode];
    };
};