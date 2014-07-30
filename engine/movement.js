var movement = function() {
    var interval = null;
    var animateInterval = null;
    var moveSpeed = 5;
    var step = 0;
    var maxLeft = $("#wrapper").width() - $("#player").width();
    var maxTop = $("#wrapper").height() - $("#player").height();
    var lastKeyPressed = 0;

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
    }

    function animate(type) {
        var yPosition = type * 32 + "px";

        animateMovement(yPosition);
        animateInterval = setInterval(function() {
            animateMovement(yPosition);
        }, 100);
    }

    function animateMovement(yPosition) {
        var xPosition = step * 30 + "px";

        if (step == 3) {
            step = 0;
        }

        $('#player').css('background-position', xPosition + ' ' + yPosition);

        step++;
    }

    function keyDownListener() {
        addEventListener("keydown", function(e) {
            var key = e.keyCode;

            if (interval == null && !$("#dialog").is(":visible") && !$("#win-end-screen").is(":visible")) {
                if (key == 37) {  //left arrow
                    interval = movePlayer("left", "-", moveSpeed);
                    animate(3);
                } else if (key == 38) { //up arrow
                    interval = movePlayer("top", "-", moveSpeed);
                    animate(1);
                } else if (key == 39) { //right arrow
                    animate(2);
                    interval = movePlayer("left", "+", moveSpeed, maxLeft);
                } else if (key == 40) { //down arrow
                    interval = movePlayer("top", "+", moveSpeed, maxTop);
                    animate(0);
                }

                lastKeyPressed = key;
            }
        }, false);
    }

    function keyUpListener() {
        addEventListener("keyup", function(e) {
            var key = e.keyCode;

            if (interval != null && key >= 37 && key <= 40) {
                clearInterval(animateInterval);
                clearInterval(interval);
                animateInterval = null;
                interval = null;
            }
        }, false);
    }

    this.getLastKeyPressed = function() {
        return lastKeyPressed;
    };

    this.__construct = function() {
        keyDownListener();
        keyUpListener();
    };
};