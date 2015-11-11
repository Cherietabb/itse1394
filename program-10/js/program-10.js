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
    $('#bobbity').click(function () {
        $.post('program-10.php',
            {
                name: 'Cherie Tabb',
                country: 'USA'
            },
            function (data, status) {
                alert('Data: ' + data + '\nStatus: ' + status);
            });
    });
});

