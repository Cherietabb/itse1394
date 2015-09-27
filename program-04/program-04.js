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
var selfInvoke = (function () {
    document.getElementById('greet').innerHTML = '#2 Hello from selfInvoke';
})();


// Requirement 3
// Sample Closure Only
function outer(x) {
    var z = 10;
    function inner(y) {
        var var1 = (x + y + (++z));
        return var1;
    }
    return inner(5);
}
var incrementStatic = (function() {
    var counter = 0;
    alert(counter);
    return function() {
        return ++counter;
    }
})();
function Puppy(name) {
    this.getName = function() {
        return name;
    };
    this.setName = function(value) {
        name = value;
    }
}
function callClosure1() {
    document.getElementById('display1').innerHTML = outer(5);
}
function callClosure2() {
    document.getElementById('display2').innerHTML = incrementStatic();
}
var puppy = new Puppy('Sparky');
function callClosure3(action) {
    if (action == 'get') {
        document.getElementById('display3').innerHTML = puppy.getName();
    } else {
        puppy.setName('Sal');
        document.getElementById('display3').innerHTML = puppy.getName();
    }
}
/*function closureExample(names) {
    this.getName = function () {
        return name;
    };
    this.setName = function (value) {
        name = value;
    }
}
function callClosure() {
    document.getElementById('names').innerHTML = 'Please enter a name: ';
}
*/
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
    document.getElementById("myPara").style.fontSize = '24pt';
}

// Requirement 6
var myMouseOver = function (img) {
    img.src = 'assets/img2.jpg';
    this.addEventListener('mouseover', myMouseOver, true);
};
var myMouseOut = function (img) {
    img.src = 'assets/img1.jpg';
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
function myMouseUp() {
    mydemo.style.backgroundColor = 'black';
    txtchng.style.color = 'white';
    mydemo.addEventListener('mouseup', myMouseUp, true);
}

// Requirement 8
(function handleDivClick() {
    document.getElementById('bubble').addEventListener('click', function () {
        alert("So is the div element!");
    }, false);
    document.getElementById('nobubble').addEventListener('click', function () {
        alert("The p element is bubbling!");
    }, false);
})();

// Requirement 9
var domContent = function () {
    alert(document.documentElement.innerHTML);
};

// Requirement 10
var changeContent = function () {
    document.getElementById('bar').innerHTML = document.getElementById('foo').firstChild.nodeValue;
};

// Requirement 11
(function createNode() {
    var para = document.createElement('p');
    var node = document.createTextNode('This is a new paragraph element');
    para.appendChild(node);
    var element = document.getElementById('div1');
    element.appendChild(para);
})();

// Requirement 12
(function removeNode() {
    var parent = document.getElementById('blah');
    var child = document.getElementById('p1');
    parent.removeChild(child);
})();

// Requirement 13
function changeNodeList() {
    var myNodeList = document.getElementsByClassName('divs');
    for (var i = 0; i < myNodeList.length; i++) {
        myNodeList[i].style.backgroundColor = 'pink';
    }
}

