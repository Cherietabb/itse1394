/**
 * Created by Cherie Tabb on 11/18/2015.
 */

// Requirement 1
$(document).ready(function () {
    var progressbar = $('#progBar');
    progressbar.progressbar({
        value: 10,
        max: 100
    });
    function progress() {
        var val = progressbar.progressbar('value') || 0;
        progressbar.progressbar('value', val + 1);
        if(val < 99 ) {
            setTimeout(progress, 100);
        }
    }
    setTimeout(progress, 1000);
});

