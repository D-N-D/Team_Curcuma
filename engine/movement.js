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

    this.movePlayer = function(direction, type, moveSpeed, limit) {
        return setInterval(function() {
            var currentPosition = parseInt($("#player").css(direction));
            
            if(type == "-"){
                var newPosition = currentPosition - moveSpeed;
            } else {
                var newPosition = currentPosition + moveSpeed;
            }
            
            
            if (newPosition < 0 || newPosition > limit) {
                if(limit == undefined){
                    newPosition = 0;
                } else {
                    newPosition = limit;
                }
            }
            
            if(direction == "top"){
                $("#player").css({top: newPosition});
            } else {
                $("#player").css({left: newPosition});
            }
        }, 50);
    };
};