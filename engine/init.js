$(function() {
    var move = new movement();
    var collision = new questCollision();
    var step = [0, 0, 0, 0];
    move.__construct();
    collision.__construct();

    addEventListener("keydown", function(e) {
        if (e.keyCode == 13) {
            if (collision.getOverQuest() != null) {
                alert(collision.getOverQuest());
            }
        }
    }, false);

//    setInterval(function() {
//        $(".quest").each(function() {
//            var height = $(this).children("img").height();
//            var width = $(this).children("img").width();
//            var i = 0;
//            if (step[i] == 0) {
//                $(this).children("img").height(height + 10);
//                step[i] = 1;
//            } else {
//                $(this).children("img").height(height - 10);
//                step[i] = 0;
//            }
//
//            $(this).children("img").width(width);
//            i++;
//        });
//    }, 1000);
//    
//    function showStep(){
//        console.log(step);
//    }
});