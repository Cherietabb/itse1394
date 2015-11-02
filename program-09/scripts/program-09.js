/**
 * Created by Cherie on 10/4/2015.
 */

// Requirement 2
$(document).ready(function () {
    $('#places').click(function () {
        $('p, div').parent().toggleClass('blue');
    });
});

// Requirement 3
$(document).ready(function () {
    $('#happy').click(function () {
        $('#day').parents().toggleClass('red');
    })
});

// Requirement 4
$(document).ready(function () {
    $('#btnClick').click(function () {
        $('nav, article').children().toggleClass('black');
    })
});

// Requirement 5
$(document).ready(function () {
    $('#descend').click(function() {
        $('section').find('div').toggleClass('color');
    })
});

// Requirement 6
$(document).ready(function () {
    $('#para').click(function() {
        $('header').children().siblings('p').toggleClass('colors');
    })
});