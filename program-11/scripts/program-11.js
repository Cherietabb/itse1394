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
    $('#L1').draggable({
        containment: 'parent'
    });
    $('#L2').draggable({
        containment: 'parent'
    });
    $('#R1').droppable({
        accept: '#L1',
        tolerance: 'touch',
        hoverClass: 'ui-state-active',
        drop: function (event, ui) {
            $(this)
                .find('p')
                .html('Dropped!');
        }
    });
    $('#R2').droppable({
        tolerance: 'fit',
        accept: '#L2',
        hoverClass: 'ui-state-active',
        drop: function (event, ui) {
            $(this)
                .find('p')
                .html('Dropped!');
        }
    })
});

// Requirement 5
$(document).ready(function () {
    $('article').resizable({
        ghost: true
    })
});

// Requirement 6
$(document).ready(function () {
    $('nav').resizable({
        containment: 'parent',
        minHeight: 70,
        minWidth: 70
    })
});

// Requirement 7
$(document).ready(function () {
    $('.resize').resizable({
        alsoResize: '.resize'
    });
});

// Requirement 8
$(document).ready(function () {
    $('#select').selectable({
        filter: 'li:first-child, li:last-child'
    });
});

// Requirement 9
$(document).ready(function () {
    $('#sorted').sortable({
        placeholder: 'highlight'
    })
});
