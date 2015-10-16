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
        $('footer').fadeToggle(1000)
    });
});

// Requirement 5
$(document).ready(function () {
    $('#bears').click(function () {
        $('#play').fadeTo(1000, 0.20);
    });
});

// Requirement 6
$(document).ready(function () {
    $('#chiefs').click(function () {
        $('#sunday').slideToggle();
    });
    $('#sunday').click(function () {
        $('#chiefs').slideToggle();
    })
});

// Requirement 7
$(document).ready(function () {
    $('#forte').click(function () {
        var ldiv = $('#leftDiv');
        ldiv.animate({'marginLeft': '200px'});
    });
    $('#game').click(function () {
        var rdiv = $('#rightDiv');
        rdiv.animate({'marginLeft': '0'});
    });
});

// Requirement 8
$(document).ready(function () {
    $('#winner').click(function () {
        $('#summer').animate({'fontSize': '5em'}, 'slow')
    });
});

// Requirement 9
$(document).ready(function () {
    $('#moveDiv').click(function () {
        var ltdiv = $('#leftDiv2');
        var rtdiv = $('#rightDiv2');
        ltdiv.animate({'marginLeft': '200px'}, 'slow', function () {
            alert('Right div moves next.');
            rtdiv.animate({'marginLeft': '0'}, 2500);
        });
    });
});

// Requirement 10
$(document).ready(function () {
    $('#btnclick').click(function () {
        var div = $('#lastreq');
        div.animate({'height': '400px'})
            .hide(3000);
    });
});