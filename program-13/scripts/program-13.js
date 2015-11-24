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
    $('#slide2').slider({
        range: true,
        min: 0,
        max: 1000,
        values: [275, 750],
        slide: function(ui, values) {
            $('#slide1').val(ui.values[0] + ' - ' + ui.values[1]);
        }
    });
    $( "#slide1" ).val($( "#slide2" ).slider( "values", 0 ) + $( "#slide2" ).slider( "values", 1 ) );

});

// Requirement 3
$(document).ready(function () {
    $('#spinners').spinner();
});
