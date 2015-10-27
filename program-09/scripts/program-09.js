/**
 * Created by Cherie on 10/4/2015.
 */
// Requirement 2
$(document).ready(function () {
    $('#places').on('click', function() {
        $('p, div').parent().css({'border-color': 'blue'});
    });
    $('#places').on('click', function() {
        $('p, div').parent().css({'border-color': ''})
    });
});

// Requirement 3
