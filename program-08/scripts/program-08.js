/**
 * Created by Cherie on 10/4/2015.
 */

// Requirement 1
$(document).ready(function () {
    $('#showText').click(function () {
        var txt = $('p:first').text();
        $('code').html(txt);
    });
    $('#showHtml').click(function() {
        var txt = $('p:first').html();
        $('code').text(txt);
    });
});