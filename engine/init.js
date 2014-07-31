$(function() {
    var audio = new gameAudio();
    var move = new movement(audio);
    var collision = new questCollision();
    var objCollision = new objectCollision(move);
    var quest = new takeQuest(collision, audio);

    move.__construct();
    collision.__construct();
    objCollision.__construct();
    quest.__construct();

    $("#walking-sound").prop("playbackRate", 2);
});