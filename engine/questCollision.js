var questCollision = function() {
    var questCoordinates = {};
    var playerCoords = {left: 0, top: 0};
    var playerHeight = $("#player").height();
    var playerWidth = $("#player").width();
    var overQuest = null;
    var radius = 50;

    this.getQuestsCoordinates = function() {
        $(".quest").each(function() {
            var id = $(this).attr("id");
            var leftPos = parseInt($(this).css("left"));
            var topPos = parseInt($(this).css("top"));
            questCoordinates[id] = {left: leftPos, top: topPos};
        });
    };

    this.setPlayerCoordinates = function() {
        setInterval(function() {
            var posLeft = parseInt($("#player").css("left"));
            var posRight = parseInt($("#player").css("top"));
            var posTop = parseInt($("#player").css("top"));
            playerCoords = {left: posLeft, top: posTop, right: posRight};
        }, 1000);
    };

    this.questCollisionChecker = function() {
        setInterval(function() {
            for (var key in questCoordinates) {
                var obj = questCoordinates[key];
                var topStart = obj.top - playerHeight - radius;
                var topEnd = obj.top + playerHeight + radius;
                var leftStart = obj.left - playerWidth - radius;
                var leftEnd = obj.left + playerWidth + $("#" + key).width() + radius;
                var rightStart = parseInt($("#lecturer-2").css("right")) + radius + playerWidth;
                var rightEnd = parseInt($("#lecturer-2").css("right")) - radius - playerWidth;
                var playerTop = playerCoords.top;
                var playerLeft = playerCoords.left;
                var playerRight = playerCoords.right;

                if (rightEnd < 0) {
                    rightEnd = 0;
                }

                var topExpression = (playerTop >= topStart && playerTop <= topEnd);

                if ((topExpression && playerLeft >= leftStart && playerLeft <= leftEnd) ||
                    (topExpression && rightStart >= playerRight && rightEnd >= playerRight)) {
                    overQuest = key;
                } else if(key == overQuest){
                    overQuest = null;
                }
            }
        }, 1000);
    };
};