/**
 * Created by Cherie on 10/4/2015.
 */
// Requirement 1
$(document).ready(function() {
    $('#showText').click(function() {
        var txt = '';
        txt = 'Show some txt';
        $('p').html(txt);
    })
});
