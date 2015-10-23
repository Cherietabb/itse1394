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
$(document).ready(function() {
    $('#weekend').click(function() {
        alert('Color Change!');
        $('#warrior').css('background-color', '#ff66cc');
    });
});

// Requirement 5
$('#rockin').on('focus', function() {
    var text1 = document.createElement('li');
    var text2 = $('<li></li>').text(text3);
    var text3 = $('#rockin').val();
    $('body').append(text1,text2,text3);
});


// Requirement 6


// Requirement 7


// Requirement 8