/**
 * Created by Cherie on 11/6/2015.
 */

// Requirement 1
$(document).ready(function () {
    $('#d2').draggable({
        containment: '#d1'
    });
});

// Requirement 2
$(document).ready(function () {
    $('#d4').draggable({
        containment: '#d3', axis: 'x'
    })
});


// Requirement 3
$(document).ready(function () {
    var stopDrag = function () {
        $('#d6').draggable('disable');
    };
    $('#d6').draggable({
        start: function (stopDrag, ui) {
            setInterval(stopDrag, 4000);
        }
    })
});


// Requirement 4


// Requirement 5


// Requirement 6


// Requirement 7


// Requirement 8


// Requirement 9

