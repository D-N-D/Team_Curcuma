var questCollision = function() {
    var questCoordinates = {};
    var playerCoords = {left: 0, top: 0, right: 0};
    var playerHeight = $("#player").height();
    var playerWidth = $("#player").width();
    var wrapperWidth = $("#wrapper").width();
    var overQuest = null;
    var radius = 50;

    function getQuestsCoordinates() {
        $(".quest").each(function() {
            var id = $(this).attr("id");
            var leftPos = parseInt($(this).css("left")) || (wrapperWidth - parseInt($(this).css("right"))- $(this).width());
            var topPos = parseInt($(this).css("top"));
            questCoordinates[id] = {left: leftPos, top: topPos};
        });
    }

    function getPlayerCoordinates() {
        setInterval(function() {
            var posLeft = parseInt($("#player").css("left") || 0);
            var posRight = wrapperWidth - playerWidth - posLeft;
            var posTop = parseInt($("#player").css("top") || 0);
            playerCoords = {left: posLeft, top: posTop, right: posRight};
        }, 1000);
    }

    function questCollisionChecker() {
        setInterval(function() {
            for (var key in questCoordinates) {
                var obj = questCoordinates[key];
                var questWidth = $("#" + key).width();
                var right = wrapperWidth - questWidth - obj.left;
                var topStart = obj.top - playerHeight - radius;
                var topEnd = obj.top + playerHeight + radius;
                var leftStart = obj.left - playerWidth - radius;
                var leftEnd = obj.left + playerWidth + questWidth + radius;
                var rightStart = right + radius + playerWidth;
                var rightEnd = right - radius - playerWidth;
                var playerTop = playerCoords.top;
                var playerLeft = playerCoords.left;
                var playerRight = playerCoords.right;
                
                var topExpression = (playerTop >= topStart && playerTop <= topEnd);

                if ((topExpression && playerLeft >= leftStart && playerLeft <= leftEnd) ||
                        (topExpression && rightStart >= playerRight && rightEnd >= playerRight && obj.left > (wrapperWidth / 2))) {
                    overQuest = key;
                } else if (key == overQuest) {
                    overQuest = null;
                }
            }
        }, 200);
    }

    this.__construct = function() {
        getQuestsCoordinates();
        getPlayerCoordinates();
        questCollisionChecker();
    };

    this.getOverQuest = function() {
        return overQuest;
    };
};