$(function() {
    var move = new movement();
    var collision = new objectCollision();

    move.__construct();
    
    collision.getQuestsCoordinates();
});