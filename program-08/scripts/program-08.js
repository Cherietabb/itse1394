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
        $('.pics').before('<img src="assets/buckingham_fountain.jpg" alt="Buckingham Fountain"/>',
            '<img src="assets/tribune_bldg.jpg" alt="Tribune Building"/>' + '<br>');
    });
    $('#home').click(function () {
        $('.pics').after('<br>' + '<img src="assets/black_and_brown.jpg" alt="Black & Brown Puppies" class="puppies"/>',
            '<img src="assets/corgi_puppy.jpg" alt="Corgi Puppies" class="puppies"/>',
            '<img src="assets/siberian_husky_puppy.jpg" alt="Siberian Husky Puppies" class="puppies"/>' + '<br>')
    });
});

// Requirement 7
$(document).ready(function() {
    $('#remove').click(function() {
        $('img').remove('.puppies');
    })
});

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

// Requirement 9
$(document).ready(function() {
    $('#changeUp').click(function() {
        $(this).css({'color': 'blue', 'font-style': 'italic'})
    })
});

// Requirement 10
$(document).ready(function() {
    $('#getDimensions').click(function() {
        var txt = '';
        txt += 'Width: ' + $('.toggleClass').width() + '<br>';
        txt += 'Height: ' + $('.toggleClass').height() + '<br>';
        txt += 'Inner width: ' + $('.toggleClass').innerWidth() + '<br>';
        txt += 'Inner height: ' + $('.toggleClass').innerHeight() + '<br>';
        txt += 'Outer width: ' + $('.toggleClass').outerWidth() + '<br>';
        txt += 'Outer height: ' + $('.toggleClass').outerHeight() + '<br>';
        $('#almstDone').text('Dimensions of div element in requirement #8: ')
        $('#lastOne').html(txt)
    })
});
