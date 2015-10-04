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
        document.getElementById('nature').innerHTML = '';
        alert('Browser information will remain hidden');
    }
}

// Requirement 8
var favBrowser = function () {
    var txt;
    var b = prompt('What is your favorite browser?');
    switch (b) {
        case 'Chrome':
        case 'chrome':
            txt = 'That\'s my favorite, too!';
            break;
        case 'Firefox':
        case 'firefox':
            txt = 'Great Choice! Firefox is great!';
            break;
        case 'Internet Explorer':
        case 'internet explorer':
            txt = 'Also a nice browser.';
            break;
        default:
            txt = 'Interesting.  Is that a new browser?';
            break;
    }
    document.getElementById('boy').innerHTML = txt;
};

// Requirement 9
myVar = setInterval(function () {myTime()}, 1000);

function myTime() {
    var d = new Date();
    document.getElementById('rick').innerHTML = d.toLocaleTimeString();
}

// Requirement 10

timer_is_on = 0;
var t, c, rep;
str = document.getElementById('flair').innerHTML;

function timedCount() {
    flair = document.getElementById('flair');
    t = setTimeout(function(){myTime()}, 1000);
    if (timer_is_on == false) {
        timer_is_on = 1;
        rep = str.replace(/Stop/i, 'Start');
        document.getElementById('flair').innerHTML = rep;
        myTime();

    } else {
        timer_is_on = 0;
        clearTimeout(t);
        clearInterval(myVar);
        rep = str.replace(/Start/i, 'Stop');
        document.getElementById('flair').innerHTML = rep;

    }
}
flair.addEventListener('click', timedCount, false);
 /*function startTime() {
    myTime();
    if (!timer_is_on) {
        timer_is_on = 1;
        rep = str.replace(/Stop/i, 'Start');
        document.getElementById('flair').innerHTML = rep;

    }
}
flair.addEventListener('click', startTime, true);

function stopTime() {
    myTime();
    if(timer_is_on) {
        clearInterval(myVar);
        clearTimeout(t);
        timer_is_on = 0;
        rep = str.replace(/Start/i, 'Stop');
        document.getElementById('flair').innerHTML = rep;
    }
}*/
//flair.addEventListener('click', stopTime, true);




// Requirement 11
function delayTime() {
    document.getElementById('marco').style.visibility = "visible";
}
setTimeout('delayTime()', 5000);

// Requirement 12

function setCookie() {
    document.cookie = 'name=' + document.getElementById('we').value;
    document.cookie = 'school=' + document.getElementById('are').value;
    document.cookie = 'hobby=' + document.getElementById('one').value;
}

function deleteName() {
    document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

function deleteSchool() {
    document.cookie = "school=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

function deleteHobby() {
    document.cookie = "hobby=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

// Requirement 13

function getCookie() {
    var cookiesArray = document.cookie.split('; ');
    for(var i = 0; i < cookiesArray.length; i++) {
        var nameValArray = cookiesArray[i].split('=');
        if(nameValArray[0] == 'name') {
            document.getElementById('we').value = nameValArray[1];
        }else if(nameValArray[0] == 'school') {
            document.getElementById('are').value = nameValArray[1];
        }else if(nameValArray[0] == 'hobby'){
            document.getElementById('one').value = nameValArray[1];
        }else {
            alert('No cookies Found');
            break;
        }
    }
    alert(cookiesArray);
}
addEventListener('load', getCookie, false);