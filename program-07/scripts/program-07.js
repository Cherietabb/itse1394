/**
 * Created by Cherie on 10/9/2015.
 */

// Requirement 1
$(document).ready(function () {
    $('#my').click(function () {
        $('.hideDiv').hide(300).show(300);
    });

});
// Requirement 2
$(document).ready(function () {
    $('#kind').click(function () {
        $('.hideDiv').toggle(700, 'swing')
    });
});

// Requirement 3
$(document).ready(function () {
    $('tr:even').css('background-color', '#CCFFCC');
    $('tr:odd').css('background-color', '#FFDAE6');
    $('#of').click(function () {
        $('tr:even').toggle(700, 'swing')
    });
    $('#town').click(function () {
        $('tr:odd').toggle(700, 'swing')
    });

});

// Requirement 4
$(document).ready(function () {
    $('#do').click(function () {
        $('footer').fadeToggle(1000);
    });
});

// Requirement 5
$(document).ready(function () {
    $('#bears').click(function() {
        $('#play').fadeTo('slow', 0.20, function() {
            $('p').fadeIn('slow', 100, function() {
                $('p').html('Hello').css('color', '#FFFFFF');
            });

        });
    });
});

// Requirement 6
