$(function() {
    var move = new movement();
    var collision = new questCollision();

    move.__construct();
    
    collision.getQuestsCoordinates();
    collision.setPlayerCoordinates();
    collision.questCollisionChecker();
});