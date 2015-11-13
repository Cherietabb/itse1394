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
    var $d = $('#d6'),
        inter;
    var counter = 10;
    inter = setInterval(function () {
        counter--;
        var p = document.getElementById('timed');
        if (counter < 0) {
            p.innerHTML = 'Dragging disabled.';
            clearInterval(inter);
            $d.draggable({
                disabled: true
            })
        } else {
            p.innerHTML = 'You can drag this element for the next ' + counter.toString() + ' seconds.';
            $d.draggable({
                containment: '#d5'
            })
        }
    }, 1000);
});

// Requirement 4
$(document).ready(function () {
    $('#L1, #L2').draggable({
        start: function () {

        }
    })
});

// Requirement 5


// Requirement 6


// Requirement 7


// Requirement 8


// Requirement 9

