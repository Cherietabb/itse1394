/**
 * Created by Cherie on 10/11/2015.
 */

// Requirement 2
$(document).ready(function () {
    $('#bibbity').click(function () {
        $('div').load('program-10.txt #p2');
    })
});

// Requirement 4
$(document).ready(function () {
    $('#bobbity').click(function (e) {
        var vname = $('#boo').val();
        var vcountry = $('#radley').val();
        $.post('program-10.php',
            {
                name:vname,
                country:vcountry
            })
            .done(function (data) {
                alert(data + '\nStatus' + status)
            })
    })
});

/*
$(document).ready(function () {
    $('#bobbity').click(function () {
        var name = $('boo').text();
        var country = $('radley').text();
        $.post('program-10.php', name, country,
            function (data, status) {
                alert('Data: ' + data + '\nStatus' + status);
            })
    })
});
*/
