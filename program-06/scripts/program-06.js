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
});


//Requirement 2
$(document).ready(function () {
    $('tr:even').css('background-color', 'pink');
    $('tr:odd').css('background-color', '#99FF99');
});


// Requirement 3
$(function changeColor() {
    $('#sunny').click(function () {
        $('p.colorChange').css('background-color', '#EFB3B3');
    })
});

// Requirement 4
$(document).ready(function buttonImageToggle() {
    $('button').mouseover(function () {
        $(this).css('background', 'url("assets/bananas.jpg")');
    });
    $('button').mouseout(function () {
        $(this).css('background', 'url("assets/RedVelvetCake.jpg")');
    });
});

// Requirement 5
$(document).ready(function changeFirstParagraph() {
    $('#presto').click(function () {
        $('#change-o').children('p:first').css({'font-family': 'arial', 'font-size': '20px'});
    })
});


//Requirement 6
$(function() {
    $('input').focus(function() {
        $(this).css('background-color', '#FF9');
    });
    $('input').blur(function() {
        $(this).css('background-color', '#ccc');
    })
});

//Requirement 7
$(document).ready(function () {
    $('nav').mouseenter(function () {
        $(this).css({'width': '500', 'height': '500'});
    });
    $('nav').mouseleave(function() {
        $(this).css({'width': '250', 'height': '250'});
    })
});

