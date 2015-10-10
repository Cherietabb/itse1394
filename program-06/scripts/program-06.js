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
    });
});


// Requirement 4
$(document).ready(function () {
    $('button').on({
        mouseover: function buttonImageToggle() {
            $('.lucky').css({'background': 'url("assets/bananas.jpg")', 'color': '#000000'});
            $('#sunny').css({'background': 'url("assets/bananas.jpg")', 'color': '#000000'});
            $('#presto').css({'background': 'url("assets/bananas.jpg")', 'color': '#000000'});
        },
        mouseout: function () {
            $('.lucky').css({'background': 'url("assets/baklavaSm.jpg")', 'color': '#ffffff'});
            $('#sunny').css({'background': 'url("assets/baklavaSm.jpg")', 'color': '#ffffff'});
            $('#presto').css({'background': 'url("assets/baklavaSm.jpg")', 'color': '#ffffff'});
        }
    });
});


// Requirement 5
$(document).ready(function changeFirstParagraph() {
    $('#presto').click(function () {
        $('#changeO').children('p:first').css({'font-family': 'arial', 'font-size': '20px'});
    });
});


//Requirement 6
$(function () {
    $('input').focus(function () {
        $(this).css('background-color', '#FF9');
    });
    $('input').blur(function () {
        $(this).css('background-color', '#ffffff');
    });
});


//Requirement 7
$(document).ready(function () {
    $('nav').mouseenter(function () {
        $(this).css({'width': '400', 'height': '250'});
    });
    $('nav').mouseleave(function () {
        $(this).css({'width': '200', 'height': '100'});
    });
});

