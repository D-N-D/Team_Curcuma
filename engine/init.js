$(function() {
    var move = new movement();
    var collision = new questCollision();

    move.__construct();
    collision.__construct();

    addEventListener("keydown", function(e) {
        if (e.keyCode == 13) {
            alert(collision.getOverQuest());
        }
    }, false);
});