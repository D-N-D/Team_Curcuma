var gameAudio = function() {
    this.footsteps = function(type) {
        if (type == 0) {
            $("#walking-sound").trigger('pause').prop("currentTime", 0);
        } else {
            $("#walking-sound").trigger('play');
        }
    };

    this.win = function() {
        $("#win-sound").prop("currentTime", 0).trigger('play');
    };
    
    this.lose = function() {
        $("#lose-sound").prop("currentTime", 0).trigger('play');
    };
    
    this.solving = function(type) {
        if (type == 0) {
            $("#walking-sound").trigger('pause');
        } else {
            $("#solving-sound").prop("currentTime", 0).trigger('play');
        }
    };
};