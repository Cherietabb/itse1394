/**
 * Created by Cherie Tabb on 11/26/2015.
 */

// Requirement 1
$(document).ready(function () {
    $('#btn-click').click(function () {
        $('#new-class').addClass('class1 class2 class3', 1000);
    });
});

// Requirement 2
$(document).ready(function () {
    $('#div-animate').click(function () {
        $(this).animate(
            {
                backgroundColor: '#0FF'
            }
        )
    })
});

// Requirement 3
$(document).ready(function () {
    function runEffect() {
        $('#blindDiv').hide('blind', {direction: 'horizontal', distance: 100}, 1000, callback1);
    }

    function callback1() {
        setTimeout(function () {
            $('#blindDiv').removeAttr('style').hide().fadeIn();
        }, 1000);
    }

    $('#blindDiv').click(function () {
        runEffect();
        return false;
    });
    $('#clipDiv').click(function () {
        $(this).hide('clip', {direction: 'horizontal'}, 1000)
    });
    function runDrop() {
        $('#dropDiv').show('drop', {direction: 'horizontal'}, 1000, callback2);
    }

    function callback2() {
        setTimeout(function () {
            $('#dropDiv').removeAttr('style').hide().fadeOut();

        }, 1000);
    }

    $('#dropBtn').click(function () {
        runDrop();
        return false;
    });
    $('#explodeDiv').click(function () {
        $(this).hide('explode', 1000)
    });
    $('#foldDiv').click(function () {
        $(this).toggle('fold', 1000);
    });
    function runPuff() {
        $('#puffDiv').show('puff', {times: 10}, 1000, callback3);
    }
    function callback3() {
        setTimeout(function () {
            $('#puffDiv').removeAttr('style').hide().fadeOut();
        },1000);
    }
    $('#puffBtn').click(function () {
        runPuff();
        return false;
    })
});

// Requirement 4


// Requirement 5


// Requirement 6


// Requirement 7