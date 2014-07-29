$(function() {
    var move = new movement();
    var collision = new questCollision();
    var objCollision = new objectCollision(move);
    var quest = new takeQuest(collision);

    move.__construct();
    collision.__construct();
    objCollision.__construct();
    quest.__construct();
});