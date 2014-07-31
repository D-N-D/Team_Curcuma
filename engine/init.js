$(function() {
    var audio = new gameAudio();
    var move = new movement(audio);
    var collision = new questCollision();
    var objCollision = new objectCollision(move);
    var quest = new takeQuest(collision, audio);
    var state = 0;

    move.__construct();
    collision.__construct();
    objCollision.__construct();
    quest.__construct();

    $("#walking-sound").prop("playbackRate", 2);

    setInterval(function() {
        if (state == 4) {
            state = 0;
        }

        $(".burning-tree").each(function() {
            var xPosition = state * 128 + "px";
            $(this).css('background-position', xPosition + ' 0px');
        });

        state++;
    }, 500);

    setInterval(function() {
        if (state == 4) {
            state = 0;
        }

        $(".quest img").each(function() {
            var path = $(this).attr("src");
            var dirs = path.split("/");
            var dirsCnt = dirs.length;
            var src = dirs[dirsCnt - 1];
            var nameArray = src.split("_");
            var secondPart = "proffesor.png";

            if (nameArray[1] == "proffesor.png") {
                secondPart = "glow.png";
            }

            var pathOnly = "";

            for (var i = 0; i < dirs.length - 1; i++) {
                pathOnly += dirs[i] + "/";
            }

            src = pathOnly + nameArray[0] + "_" + secondPart;
            $(this).attr("src", src);
        });

        state++;
    }, 500);
});