$(function() {
    var move = new movement();
    var interval = null;
    var moveSpeed = 15;

    addEventListener("keydown", function(e) {
        if (interval == null) {
            if (e.keyCode == 37) {
                interval = setInterval(function() {
                    var leftPos = parseInt($("#player").css("left"));
                    var newPosition = leftPos - moveSpeed;

                    if (newPosition < 0) {
                        newPosition = 0;
                    }

                    $("#player").css({left: newPosition});
                }, 50);
            } else if (e.keyCode == 38) {
                interval = setInterval(function() {
                    var topPos = parseInt($("#player").css("top"));
                    var newPosition = topPos - moveSpeed;

                    if (newPosition < 0) {
                        newPosition = 0;
                    }

                    $("#player").css({top: newPosition});
                }, 50);
            } else if (e.keyCode == 39) {
                interval = setInterval(function() {
                    var leftPos = parseInt($("#player").css("left"));
                    var newPosition = leftPos + moveSpeed;

                    if (newPosition > 755) {
                        newPosition = 755;
                    }

                    $("#player").css({left: newPosition});
                }, 50);
            } else if (e.keyCode == 40) {
                interval = setInterval(function() {
                    var topPos = parseInt($("#player").css("top"));
                    var newPosition = topPos + moveSpeed;

                    if (newPosition > 480) {
                        newPosition = 480;
                    }

                    $("#player").css({top: newPosition});
                }, 50);
            }
        }

        move.setKeyDown(e.keyCode);
    }, false);

    addEventListener("keyup", function(e) {
        if (interval != null) {
            clearInterval(interval);
            interval = null;
        }

        move.unSetKeyDown(e.keyCode);
    }, false);

    $("#test").click(function() {
        move.geyKeysDown();
    });


});