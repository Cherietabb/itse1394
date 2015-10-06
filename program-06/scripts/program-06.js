/**
 * Created by Cherie on 9/21/2015.
 */

//Requirement 1
$(document).ready(function () {
    $('#hideRed').click(function () {
        $(this).hide();
    });
    $('#hideGreen').click(function () {
        $(this).hide();
    });
    $('#hideBlue').click(function () {
        $(this).hide();
    });


//Requirement 2

    $('tr:even').css('background-color', 'pink');
    $('tr:odd').css('background-color', '#99FF99');


// Requirement 3
    function changeColor() {
        $('#sunny').click(function () {
            $('p.colorChange').css('background-color', '#EFB3B3');
        })
    }
    $(document).ready(changeColor);


// Requirement 4
    function buttonImageToggle() {
        $('.happy').click(function() {
            $('.lucky').switchClass('lucky', 'go', 1000);
            $('.go').switchClass('go', 'lucky', 1000);
        })
    }
    $(document).ready(buttonImageToggle);

// Requirement 5
    function changeFirstParagraph() {
        $('.presto').click(function() {
            $('div').children().first().css({'font-family': 'arial', 'font-size': '20px'});
        })
    }
    $(document).ready(changeFirstParagraph);
// Requirement 6


// Requirement 7
    $('nav').mouseenter(function () {
        $(this).css('font-size', '25px');
    });
    $('nav').mouseleave(function () {
        $(this).css('font-size', '16px');
    });


// Requirement 8


// Requirement 9


// Requirement 10


// Requirement 11


// Requirement 12


// Requirement 13

});
// Requirement 14