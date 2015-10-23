/**
 * Created by Cherie on 10/4/2015.
 */

// Requirement 1
$(document).ready(function () {
    $('#showText').click(function () {
        var txt = $('p:first').text();
        $('code').html(txt);
    });
    $('#showHtml').click(function () {
        var txt = $('p:first').html();
        $('code').text(txt);
    });
});

// Requirement 2
$('input').keyup(function () {
    var value = $(this).val();
    $('#reveal').text(value)
        .css('color', 'blue');
});

// Requirement 3
$('#setVal').click(function () {
    var text = $(this).text();
    $('#setup').val(text)
        .css({'background-color': '#EBE3E3', 'color': 'blue'})
});

// Requirement 4


// Requirement 5


// Requirement 6


// Requirement 7


// Requirement 8