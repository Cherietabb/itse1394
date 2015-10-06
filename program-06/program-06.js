/**
 * Created by Cherie on 9/21/2015.
 */

//Requirement 1
$(document).ready(function() {
    $('#hideRed').click(function() {
        $(this).hide();
    });
    $('#hideGreen').click(function() {
        $(this).hide();
    });
    $('#hideBlue').click(function() {
        $(this).hide();
    });


//Requirement 2

    $('tr:even').css('background-color', 'pink');
    $('tr:odd').css('background-color', '#99FF99');


// Requirement 3

    $('button').click(function() {
        $('.colorChange').css('background-color', '#99FF99');
    });


// Requirement 4


// Requirement 5


// Requirement 6


// Requirement 7
    $('nav').children('a').mouseenter(function() {
        $(this).css('font-size', '25px');
    });


// Requirement 8


// Requirement 9


// Requirement 10


// Requirement 11


// Requirement 12


// Requirement 13

});
// Requirement 14