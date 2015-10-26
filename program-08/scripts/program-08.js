/**
 * Created by Cherie on 10/4/2015.
 */

// Requirement 1
$(document).ready(function () {
    $('#showText').click(function () {
        var txt = $('p:first').text();
        $('code').html(txt);
    });
    $('#showHtml').click(function () {
        var txt = $('p:first').html();
        $('code').text(txt);
    });
});

// Requirement 2
$('input').keyup(function () {
    var value = $(this).val();
    $('#reveal').text(value)
        .css('color', 'blue');
});

// Requirement 3
$('#setVal').click(function () {
    var text = $(this).text();
    $('#setup').val(text)
        .css({'background-color': '#EBE3E3', 'color': 'blue'})
});

// Requirement 4
$(document).ready(function () {
    $('#weekend').click(function () {
        $('#warrior').css('background-color', '#ff66cc');
        alert('Color Change!');
        $('#warrior').css('background-color', '');
    });
});

// Requirement 5
$('#rockin').change(function () {
    $(this).each(function () {
        var newList = $(this).val();
        $('ol').append('<li>' + newList);
    });
});

// Requirement 6
$(document).ready(function () {
    $('#forever').click(function () {
        $('img').before('<img src="assets/buckingham_fountain.jpg"/>' + '<br>' +
            '<img src="assets/tribune_bldg.jpg"/>' + '<br>');
    });
    $('#home').click(function () {
        $('#pics').after('<img src="assets/black_and_brown.jpg"/>' + '<br>' + '<img src="assets/corgi_puppy.jpg"/>' +
            '<br>' + '<img src="assets/siberian_husky_puppy.jpg"/>' + '<br>')
    });
    /*
     var images = {'image1': 'assets/chicago_at_night.jpg', 'image2': 'assets/buckingham_fountain.jpg'};
     $('img').before('images[0]' + '<br>' + 'images[1]' + '<br>');
     */
});

// Requirement 7


// Requirement 8
$(document).ready(function () {
    $('#activateToggle').on({
        mouseover: function () {
            $('.toggleClass').css({'background-color': 'red', 'height': '50px', 'width': '50px'});
        },
        mouseout: function () {
            $('.toggleClass').css({'background-color': '', 'height': '', 'width': ''});
        }
    });
});
