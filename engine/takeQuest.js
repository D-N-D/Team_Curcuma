var takeQuest = function(collision, audio) {
    var questTaken = null;
    var questNum = null;
    var questScore = [0, 0, 0, 0];
    function submitListener() {
        $("#submit").click(function() {
            if (questNum != null) {
                var userInput = $("#code").val();
                //not the best way to do it
                var functionCheck = userInput.trim().split(" ")[0];
                
                if (functionCheck != "function") {
                    questScore[questNum] = 0;
                    showLoseScreen();
                    return;
                }

                var output = undefined;
                eval(userInput.toLowerCase());

                if (typeof solve == 'function') {
                    output = solve();
                } else if (userInput != "") {
                    questScore[questNum] = 0;
                    showLoseScreen();
                    return;
                }

                if (output == "dec 25" && questNum == 1) {
                    questScore[questNum] = 100;
                    showWinScreen();
                } else if (output == "стига сте мрънкали!" && questNum == 2) {
                    questScore[questNum] = 100;
                    showWinScreen();
                } else if (output == 12 && questNum == 3) {
                    questScore[questNum] = 100;
                    showWinScreen();
                } else if (output == "12345678910" && questNum == 4) {
                    questScore[questNum] = 100;
                    showWinScreen();
                } else if (questNum != null && userInput != "") {
                    questScore[questNum] = 0;
                    showLoseScreen();
                }

                var totalScore = 0;

                for (var i = 0; i < questScore.length; i++) {
                    totalScore += questScore[i];
                }

                $("#score").html(totalScore);

                if (totalScore == 400) {
                    showWinEndScreen();
                }

                solve = undefined;
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
        audio.solving(1);
        $("#code").val("function solve(){\n\n}").focus();
        $("#codebox").show(100);
    }

    function showWinScreen() {
        $("#codebox").hide(100);
        hideQuestItems();
        audio.win();
        $("#win-screen").delay(200).slideDown(500).delay(2000).fadeOut(500);
    }

    function showWinEndScreen() {
        $("#codebox").hide(100);
        hideQuestItems();
        $("#win-end-screen").delay(1500).slideDown(500);
    }

    function showLoseScreen() {
        audio.lose();
        $("#loose-screen").delay(200).slideDown(500).delay(1500).fadeOut(500);
    }

    function hideQuestItems() {
        audio.solving(0);
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
