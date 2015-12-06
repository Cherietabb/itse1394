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
            },2000
        )
    })
});

// Requirement 3
$(document).ready(function () {
    function runEffect() {
        $('#blindDiv').hide('blind', {direction: 'horizontal', distance: 100}, 2000, callback1);
    }

    function callback1() {
        setTimeout(function () {
            $('#blindDiv:visible').removeAttr('style').fadeIn();
        }, 1000);
        $('#blindDiv').hide();
    }

    $('#blindDiv').click(function () {
        runEffect();
        return false;
    });
    $('#clipDiv').click(function () {
        $(this).effect({
            effect: 'clip',
            duration: 2000,
            easing: 'swing'
        })
    });
    // Drop Effect
    function runDrop() {
        $('#dropDiv').show('drop', {times: 10, distance: 100}, 1000, callback2);
    }

    function callback2() {
        setTimeout(function () {
            $('#dropDiv:visible').removeAttr('style').fadeOut();

        }, 1000);
    }
    // Call Function
    $('#dropBtn').click(function () {
        runDrop();
        return false;
    });
    // Hide the div
    $('#dropDiv').hide();

    // Explode Effect
    $('#explodeDiv').click(function () {
        $(this).effect({
            effect: 'explode',
            duration: 2000,
            easing: 'easeOutQuad'
        })
    });

    // Fold Effect
    $('#foldDiv').click(function () {
        $(this).effect({
            effect: 'fold',
            duration: 3000
        })
    });

    // Puff Effect
    function runPuff() {
        $('#puffDiv').show('puff', {times: 10, distance: 100}, 1000, callback3);
    }

    function callback3() {
        setTimeout(function () {
            $('#puffDiv:visible').removeAttr('style').fadeOut();
        },1000);
    }
    // Call Function
    $('#puffBtn').click(function () {
        runPuff();
        return false;
    });
    // Hide Div
    $( "#puffDiv" ).hide();

    // Shake Effect
    $('#shakeDiv').click(function () {
        $(this).effect({
            effect: 'shake',
            times: 10,
            distance: 50
        }, 3000, function () {
            $(this).hide();
        })
    });

    // Slide Effect
    $('#slideDiv').click(function () {
        $(this).effect({
            effect: 'slide',
            duration: 1500
        })
    })
});

// Requirement 4
$(document).ready(function () {
    $('#addPic').click(function () {
       $('body').addClass('wallPaper', 1000);
    });
    $('#rmPic').click(function () {
        $('body').removeClass('wallPaper')
    })
});

// Requirement 5
$(document).ready(function () {
    $('#btnSwitch').click(function () {
        $('.noWallpaper').switchClass('noWallpaper', 'newWallpaper', 2000, 'easeOutQuad');
        $('.newWallpaper').switchClass('newWallpaper', 'noWallpaper', 2000, 'easeOutQuad');
    })
});

// Requirement 6
$(document).ready(function () {
    $('#switch').click(function () {

    })
});

// Requirement 7
$(document).ready(function () {
    $('#button').click(function() {
        $('#effect').toggleClass('newClass', 2000)
    });
});