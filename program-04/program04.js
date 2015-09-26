/**
 * Created by Cherie on 9/15/2015.
 */

//Requirement 1

var findAverage = function (a, b, c, d) {
    for (var i = 0, total = 0, len = arguments.length; i < len; i++) {
        total += arguments[i];
    }
    return total / arguments.length;
};
document.getElementById('num').addEventListener('click', function () {
    p = document.getElementById('results').innerHTML = 'The average is: ' + findAverage(50, 6, 5, -40)
});


//Requirement 2
var selfInvoke = function () {
    return selfInvoke();
};
document.getElementById('greeting').addEventListener('click', function () {
    p = document.getElementById('greet').innerHTML = '#2 Hello from selfInvoke'
});


// Requirement 3
var closureExample = (function () {
    var namesArray = [];
    var names = document.getElementById('names');
    return function () {
        namesArray.push(newName);
        names = document.getElementById('names').value;
    };
})(document.getElementById('btnclick').addEventListener('click', function(){document.getElementById('names').innerHTML = 'Please enter a name: ';}, true));

// Requirement 4
var div = document.getElementsByClassName('changeMyColor');
var colorChange = function () {
    return colorChange();
};
document.getElementById('change').addEventListener('click', function () {
    div = document.getElementById('newColor').style.backgroundColor = 'pink'
}, true);

// Requirement 5

function changeFontSize() {
    document.getElementById("myPara").style.fontSize = "x-large";
}

// Requirement 6
var myMouseOver = function (img) {
    img.src = 'img2.jpg';
    this.addEventListener('mouseover', myMouseOver, true);
};
var myMouseOut = function (img) {
    img.src = 'img1.jpg';
    this.addEventListener('mouseout', myMouseOut, true);
};


// Requirement 7
var myMouseDown = function (div) {
    div = document.getElementById('mydemo');
    p = document.getElementById('txtchng');
    div.style.backgroundColor = 'green';
    p.style.color = 'pink';
    div.addEventListener('mousedown', myMouseDown, true);
};
function myMouseUp () {
    mydemo.style.backgroundColor = 'black';
    txtchng.style.color = 'white';
    mydemo.addEventListener('mouseup', myMouseUp, true);
}

// Requirement 8


// Requirement 9


// Requirement 10


// Requirement 11


// Requirement 12


// Requirement 13


// Requirement 14