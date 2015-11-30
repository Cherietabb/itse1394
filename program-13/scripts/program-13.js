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

// Requirement 2
$(document).ready(function () {
    var imSlidin = $('#slide2');
    imSlidin.slider({
        range: true,
        min: 0,
        max: 1000,
        values: [275, 750],
        slide: function(event, ui) {
            $('#slide1').val(ui.values[0] + ' - ' + ui.values[1]);
        }
    });
    $( "#slide1" ).val(imSlidin.slider( "values", 0 ) + imSlidin.slider( "values", 1 ) );

});

// Requirement 3
$(document).ready(function () {
    $('#spinners').spinner({
        min: 0,
        max: 10,
<<<<<<< HEAD
        culture: 'en-US',
=======
        step: 1,
>>>>>>> 63ab4b52c743c23d66497367b2470a4c4ef7ec74
        numberFormat: 'C'
    });
});
