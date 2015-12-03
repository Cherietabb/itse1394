/**
 * Created by Cherie Tabb on 11/26/2015.
 */

// Requirement 1
$(document).ready(function () {
    $('#btn-click').click(function() {
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
        $('#blindDiv').hide('blind', {direction: 'horizontal'}, 1000, callback);
    }
    function callback() {
        setTimeout(function() {
            $('#blindDiv').removeAttr('style').hide().fadeIn();
        }, 1000);
    }
    $('#blindDiv').click(function () {
        runEffect();
        return false;
    });
    function runClip() {
        $('#clipDiv').hide('clip', {direction: 'horizontal'}, 1000);
    }
    $('#clipDiv').click(function() {
        runClip();
        return false;
    });
    function runDrop() {
        $('#dropDiv').hide('drop', {direction: 'horizontal'}, 1000, callback);
    }
    function callback() {
        setTimeout(function() {
            $('#dropDiv').removeAttr('style').show().fadeIn();

        }, 1000);
    }
    $('#dropDiv').click(function () {
        runDrop();
        return false;
    })
});

// Requirement 4


// Requirement 5


// Requirement 6


// Requirement 7