/**
 * Created by Cherie on 9/15/2015.
 */

//Requirement 1

var findAverage = function(a, b, c ,d) {
    for (var i=0, total = 0, len=arguments.length; i<len; i++) {
        total += arguments[i];
        var
            p = document.createElement('p');
    }
    return total / arguments.length;
};
document.getElementById('num').addEventListener('click', function() {p = document.getElementById('result').innerHTML = 'The average is: ' + findAverage(50, 6, 5, -40)});


//Requirement 2
var selfInvoke = function () {
    var
        p = document.createElement('p');
    return selfInvoke();
};
document.getElementById('greeting').addEventListener('click', function() {p = document.getElementById('greet').innerHTML =  '#2 Hello from selfInvoke'});



// Requirement 3


// Requirement 4


// Requirement 5


// Requirement 6


// Requirement 7


// Requirement 8


// Requirement 9


// Requirement 10


// Requirement 11


// Requirement 12


// Requirement 13


// Requirement 14