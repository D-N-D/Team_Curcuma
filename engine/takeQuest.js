var takeQuest = function(collision) {
    var questTaken = null;

    function keyDownListener() {
        addEventListener("keydown", function(e) {
            if (e.keyCode == 13) {
                if (collision.getOverQuest() != null && questTaken == null) {
                    acceptQuest(collision.getOverQuest());
                } else if (collision.getOverQuest() != null && questTaken != null) {
                    showCodeBox();
                }
            } else if (e.keyCode == 27) {
                hideQuestItems();
            }
        }, false);
    }

    function acceptQuest(quest) {
        var questNumber = quest.split("-")[1];
        $("#dialog").hide(500).removeClass().show(100).addClass("l-" + questNumber + "-background");
        questTaken = quest;
    }

    function showCodeBox() {
        $("#codebox").show(100);
    }

    function hideQuestItems() {
        $("#dialog").hide(100);
        $("#codebox").hide(100);
        questTaken = null;
    }

    this.__construct = function() {
        keyDownListener();
    };
};