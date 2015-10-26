/**
 * Created by Cherie on 10/4/2015.
 */

// Requirement 2
$(document).ready(function () {
    $('#places').click(function() {
        $('p').parent('header footer').css('border', 'blue');
    });
});