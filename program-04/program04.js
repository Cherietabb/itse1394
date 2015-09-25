/**
 * Created by Cherie on 9/15/2015.
 */

//Requirement 1

var findAverage = function(a, b, c ,d) {
    for (var i=0, total = 0, len=arguments.length; i<len; i++) {
        total += arguments[i];
    }
    return total / arguments.length;
};
document.getElementById('num').addEventListener('click', function () {
    p = document.getElementById('result').innerHTML = 'The average is: ' + findAverage(50, 6, 5, -40)
});


//Requirement 2
var selfInvoke = function () {
    return selfInvoke();
};
document.getElementById('greeting').addEventListener('click', function () {
    p = document.getElementById('greet').innerHTML = '#2 Hello from selfInvoke'
});


// Requirement 3
var divs = document.getElementsByTagName('div');
(function() {
    for (var i = 0, len= divs.length; i < len; i++) {
<<<<<<< HEAD

=======
>>>>>>> 1011445d95b4d7928dfacf95ebbcb905bf661228
        divs[i].addEventListener('click', function() {
            console.log('Div ' + i + 'got clicked');
        });
        document.getElementById('');
    }
})();

// Requirement 4
var div = document.getElementsByClassName('changeMyColor');
var changeColor = function () {
    document.getElementsByClassName('changeMyColor');
};
document.getElementById('change').addEventListener('click', function () {
    div = document.getElementById('newColor').style.backgroundColor = 'pink'
}, true);

// Requirement 5


// Requirement 6


// Requirement 7

function myMouseOver(id) {
    document.getElementById('id').src = 'img2.jpg';
}
function myMouseOut(id) {
    document.getElementById('id').src = 'img1.jpg';
}
//img1.addEventListener('mouseover', 'mouseout', myMouseOver, myMouseOut);


// Requirement 8


// Requirement 9


// Requirement 10


// Requirement 11


// Requirement 12


// Requirement 13


// Requirement 14