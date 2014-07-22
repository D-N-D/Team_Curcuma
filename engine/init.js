$(function() {
    var move = new movement();
    var interval = null;
    var moveSpeed = 15;
    var maxLeft = $("#wrapper").width() - $("#player").width();
    var maxTop = $("#wrapper").height() - $("#player").height();

    addEventListener("keydown", function(e) {
        if (interval == null) {
            if (e.keyCode == 37) {
                interval = move.movePlayer("left", "-", moveSpeed);
            } else if (e.keyCode == 38) {
                interval = move.movePlayer("top", "-", moveSpeed);
            } else if (e.keyCode == 39) {
                interval = move.movePlayer("left", "+", moveSpeed, maxLeft);
            } else if (e.keyCode == 40) {
                interval = move.movePlayer("top", "+", moveSpeed, maxTop);
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
});