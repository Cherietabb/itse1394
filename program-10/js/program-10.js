/**
 * Created by Cherie on 10/11/2015.
 */

// Requirement 2

$(document).ready(function () {
    $('#bibbity').click(function () {
        $.get('program-10.txt', function (data) {
            alert(data);
            $('#p2').html(data);
        })
    })
});

// Requirement 4
$(document).ready(function () {
    $('#bobbity').click(function () {
        $.get('program-10.php', function (data) {
            //$('#boo').html(data);
        })
    })
});