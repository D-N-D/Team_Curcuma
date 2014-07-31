var gameAudio = function() {
    this.footsteps = function(type) {
        if (type == 0) {
            $("#walking-sound").trigger('pause');
            $("#walking-sound").prop("currentTime", 0);
        } else {
            $("#walking-sound").trigger('play');
        }
    };
};