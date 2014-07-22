var movement = function() {
    var keysDown = {};
    var interval = null;
    var moveSpeed = 15;
    var maxLeft = $("#wrapper").width() - $("#player").width();
    var maxTop = $("#wrapper").height() - $("#player").height();

    function setKeyDown(keyCode) {
        keysDown[keyCode] = true;
        return this.keysDown;
    };

    function unSetKeyDown(keyCode) {
        delete keysDown[keyCode];
        return this.keysDown;
    };

    function movePlayer(direction, type, moveSpeed, limit) {
        return setInterval(function() {
            var currentPosition = parseInt($("#player").css(direction));

            if (type == "-") {
                var newPosition = currentPosition - moveSpeed;
            } else {
                var newPosition = currentPosition + moveSpeed;
            }

            if (newPosition < 0 || newPosition > limit) {
                if (limit == undefined) {
                    newPosition = 0;
                } else {
                    newPosition = limit;
                }
            }

            if (direction == "top") {
                $("#player").css({top: newPosition});
            } else {
                $("#player").css({left: newPosition});
            }
        }, 50);
    };
    
    function keyDownListener() {
        addEventListener("keydown", function(e) {
            if (interval == null) {
                if (e.keyCode == 37) {
                    interval = movePlayer("left", "-", moveSpeed);
                } else if (e.keyCode == 38) {
                    interval = movePlayer("top", "-", moveSpeed);
                } else if (e.keyCode == 39) {
                    interval = movePlayer("left", "+", moveSpeed, maxLeft);
                } else if (e.keyCode == 40) {
                    interval = movePlayer("top", "+", moveSpeed, maxTop);
                }
            }

            setKeyDown(e.keyCode);
        }, false);
    };
    
    function keyUpListener() {
        addEventListener("keyup", function(e) {
            if (interval != null) {
                clearInterval(interval);
                interval = null;
            }

            unSetKeyDown(e.keyCode);
        }, false);

        return interval;
    };
    
    this.__construct = function (){
        keyDownListener();
        keyUpListener();
    };
};