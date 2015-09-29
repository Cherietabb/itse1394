/**
 * Created by Cherie on 9/21/2015.
 */
//Requirement 1
function displaySize() {
    document.getElementById('snausages').innerHTML = 'Screen Width is: ' + screen.width + '<br>' + 'Screen height is: ' + screen.height;
}

//Requirement 2
function displayLocation() {
    document.getElementById('cletus').innerHTML = 'The page location is ' + window.location.href;
}

// Requirement 3
function changeLocation() {
    location.replace('https://www.google.com');
}

// Requirement 4
function goBack() {
    window.history.back();
}

// Requirement 5

function goForward() {
    window.history.forward();
}
// Requirement 6
var browserInformation = (function () {
    document.getElementById('hercules').innerHTML = navigator.appName + '<br>' + navigator.appCodeName +
        '<br>' + navigator.product;
}());


// Requirement 7
function seeInfo() {
    var x = confirm('Would you like to see your browser information?');
    if (x === true) {
        document.getElementById('nature').innerHTML = navigator.appVersion + '<br>' + navigator.userAgent +
            '<br>' + navigator.platform;
    }
    else {
        alert('Browser information will remain hidden');
    }
}

// Requirement 8
var favBrowser = function () {
    var txt;
    var b = prompt('What is your favorite browser?');
    switch (b) {
        case 'Chrome':
            txt = 'That\'s my favorite, too!';
            break;
        case 'Firefox':
            txt = 'Great Choice! Firefox is great!';
            break;
        case 'Internet Explorer':
            txt = 'Also a nice browser.';
            break;
        default:
            txt = 'Interesting.  Is that a new browser?';
            break;
    }
    document.getElementById('boy').innerHTML = txt;
};

// Requirement 9
var tic = setInterval(myTime, 1000);

function myTime() {
    var d = new Date();
    document.getElementById('rick').innerHTML = d.toLocaleTimeString();
}
// Requirement 10
function strtStop() {
    var str = document.getElementById('flare').innerHTML;
   if(clearInterval(tic) === true) {
       var res = str.replace('Stop');
       document.getElementById("demo").innerHTML = res;
   }
    else {
       document.getElementById('flare').innerHTML = 'Start';

   }
}
// Requirement 11


// Requirement 12


// Requirement 13


// Requirement 14