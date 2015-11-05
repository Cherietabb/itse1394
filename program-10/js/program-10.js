/**
 * Created by Cherie on 10/11/2015.
 */

// Requirement 2
/*
$(document).ready(function() {
    $('#bibbity').click(function() {
        $.get('ajax/program-10.txt', function(data) {
            $('p').html(data);
            alert('load is success');
        })
    })
});
*/

$(document).ready(function () {
    $('#bibbity').click(function () {
        $.get('program-10.txt', function (data) {
            alert(data);
            $('#p2').html(data);
        })
    })
});
