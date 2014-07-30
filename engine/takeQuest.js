var takeQuest = function(collision) {
    var questTaken = null;
    var questNum = null;
    var questScore = [0, 0, 0, 0];
    function submitListener() {
        $("#submit").click(function() {
            if (questNum != null) {
                var userInput = $("#code").val();
                var output = undefined;
                eval(userInput.toLowerCase());

                if (typeof solve == 'function') {
                    output = solve();
                }

                if (output == "0123456789" && questNum == 1) {
                    questScore[questNum] = 100;
                    showWinScreen();
                } else if (output == "0123456789" && questNum == 2) {
                    questScore[questNum] = 100;
                    showWinScreen();
                } else if (output == "0123456789" && questNum == 3) {
                    questScore[questNum] = 100;
                    showWinScreen();
                } else if (output == "0123456789" && questNum == 4) {
                    questScore[questNum] = 100;
                    showWinScreen();
                } else {
                    questScore[questNum] = 0;
                    showLoseScreen();
                }

                $("#score").html(function() {
                    var totalScore = 0;

                    for (var i = 0; i < questScore.length; i++) {
                        totalScore += questScore[i];
                    }

                    return totalScore;
                });
            }
        });
    }

    function keyDownListener() {
        addEventListener("keydown", function(e) {
            if (e.keyCode == 13) {
                if (collision.getOverQuest() != null && questTaken == null) {
                    var questNumber = collision.getOverQuest().split("-")[1];
                    questNum = questNumber;
                    acceptQuest(questNumber);
                } else if (collision.getOverQuest() != null && questTaken != null && !$("#codebox").is(":visible")) {
                    showCodeBox();
                }
            } else if (e.keyCode == 27) {
                hideQuestItems();
            }
        }, false);
    }

    function acceptQuest(quest) {
        $("#dialog").hide(500).removeClass().show(100).addClass("l-" + quest + "-background");
        questTaken = quest;
    }

    function showCodeBox() {
        $("#code").val("");
        $("#codebox").show(100);
    }

    function showWinScreen() {
        $("#codebox").hide(100);
        hideQuestItems();
        $("#win-screen").delay(200).slideDown(500).delay(500).fadeOut(500);
    }

    function showLoseScreen() {
        $("#loose-screen").delay(200).slideDown(500).delay(500).fadeOut(500);
    }

    function hideQuestItems() {
        $("#dialog").hide(100);
        $("#codebox").hide(100);
        questTaken = null;
        questNum = null;
    }

    this.__construct = function() {
        keyDownListener();
        submitListener();
    };
};