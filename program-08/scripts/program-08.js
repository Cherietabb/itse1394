/**
 * Created by Cherie on 10/4/2015.
 */
// Requirement 1
$(document).ready(function() {
    $('#showText').click(function() {
        var txt = $('code').text('<p>This is a paragraph.</p>');
        $('code').html(txt);
    });
});
