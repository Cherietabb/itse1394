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
    var $dragMe = $('#d6'),
        t,
        inter,
        p,
    counter = 10;
    inter = setInterval(function () {
        counter--;
        if (counter < 0) {
            p = document.getElementById('timed').innerHTML = 'Dragging disabled.';
            clearInterval(inter);
        } else {
            timed.innerHTML = 'You can drag this element for the next ' + counter.toString() + ' seconds.'
        }
    }, 1000);
    $dragMe.draggable({
        containment: '#d5',
        start: function () {
            clearTimeout(t);
        },
        stop: function () {
            t = setTimeout(function () {
                $dragMe.draggable({
                    destroy: true
                });
            }, 1000)
        }
    })
});

// Requirement 4
$(document).ready(function () {

});

// Requirement 5


// Requirement 6


// Requirement 7


// Requirement 8


// Requirement 9

