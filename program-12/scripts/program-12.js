/**
 * Created by Cherie on 11/15/2015.
 */

// Requirement 1
$(document).ready(function () {
    $('#way').accordion({
        heightStyle: 'content'
    });
});

// Requirement 2
$(document).ready(function () {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    $('#to').autocomplete({
        source: daysOfWeek
    })

});

// Requirement 3
$(document).ready(function () {
    $('input[type=submit], a, button').button();
    $('#btnSet').buttonset();
});

// Requirement 4
$(document).ready(function () {
    $('#picker').datepicker({
        beforeShowDay: function (date) {
            var dayOfWeek = date.getDay();
            if (dayOfWeek == 0 || dayOfWeek == 6) {
                return [false];
            } else {
                return [true];
            }

        }
    });
});

// Requirement 5
$(function () {
    $("#log").dialog({
        autoOpen: false,
        buttons: {
            OK: function () {
                $(this).dialog("close");
            }
        },
        beforeClose: function (event, ui) {
            if (!$("#terms").prop("checked")) {
                event.preventDefault();
                $("[for=terms]").addClass("invalid");
            }
        },
        width: 400
    });
    $("#open").click(function () {
        $("#log").dialog("open");
    });
});

// Requirement 6
$(function () {
    $('#list').menu({
        icons: {
            submenu: 'ui-icon-circle-triangle-e icon'

        },
        position: {
            my: "top right", at: "left+5 top+5", of: 'target'
        }
    })
});