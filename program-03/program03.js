/**
 * Created by Cherie Tabb on 9/14/2015.
 */

// Requirement 1
function myTemp() {
    var x, temp;
    x = document.getElementById('temp').value;
    try {
        if ((x > 90) && (x <= 140)) {
            console.log('foo');
            alert('Hot!');
        } else if ((x >= 80) && (x <= 90)) {
            alert('Mighty Warm!');
        } else if ((x > 60) && (x <= 79)) {
            alert('Pleasant!');
        } else if ((x >= 40) && (x <= 59)) {
            alert('Chilly!');
        } else if ((x > -50) && (x <= 39)) {
            alert('freezing!');
        }
        if (x < -50) throw new Error('Temp is too low!');
        if (x > 140) throw new Error('Temp is too high!');

    }
    catch (e) {
        alert("Error: " + e.message)
    }
}

// Requirement 2
(function (doc) {
    "use strict";

    var
        names = doc.getElementById('names'),
        myAnswer = doc.getElementById('myAnswer');

    function getMonth() {
        var month, monthName;
        month = parseInt(document.getElementById('month').value);
        try {
            switch (month) {
                case 1:
                    monthName = 'January';
                    break;
                case 2:
                    monthName = 'February';
                    break;
                case 3:
                    monthName = 'March';
                    break;
                case 4:
                    monthName = 'April';
                    break;
                case 5:
                    monthName = 'May';
                    break;
                case 6:
                    monthName = 'June';
                    break;
                case 7:
                    monthName = 'July';
                    break;
                case 8:
                    monthName = 'August';
                    break;
                case 9:
                    monthName = 'September';
                    break;
                case 10:
                    monthName = 'October';
                    break;
                case 11:
                    monthName = 'November';
                    break;
                case 12:
                    monthName = 'December';
                    break;
            }
            var p = doc.createElement('p');
            p.innerHTML = 'You picked ' + monthName;
            names.appendChild(p);

            if (month < 1) throw new Error('Too Low!');
            if (month > 12) throw new Error('Number must be 1 - 12!');
            if (isNaN(month)) throw new Error('Must enter a number!');
            if (month === "") throw new Error('input is empty!')
        } catch (e) {
            alert("Error: " + e.message);
        }
    }

    click.addEventListener('click', getMonth);
})(document);

// Requirement 3

function getNum() {
    var seasons, x;
    x = x = document.getElementById('num').value;
    seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
    console.log("foo");
    try {
        switch (x) {
            case '12':
            case '1':
            case '2':
                document.getElementById('season').innerHTML = "12, 1, 2: " + seasons[0];
                break;
            case '3':
            case '4':
            case '5':
                document.getElementById('season').innerHTML = "3, 4, 5: " + seasons[1];
                break;
            case '6':
            case '7':
            case '8':
                document.getElementById('season').innerHTML = "6, 7, 8: " + seasons[2];
                break;
            case '9':
            case '10':
            case '11':
                document.getElementById('season').innerHTML = "9, 10, 11: " + seasons[3];
                break;
        }
        if (x < 1 || x > 12)
            throw new Error('number must be 1 - 12!');
        if (isNaN(x))
            throw new Error('Must enter a number!');
        if (x === "")
            throw new Error('value is empty!');
    }
    catch (e) {
        alert('Error: ' + e.message);
    }
}

// Requirement 4
(function (doc) {
    "use strict";

    var
        birth = doc.getElementById('birth'),
        name = doc.getElementById('name');

    function displayBirthMonth() {
        var key, month;
        month = {
            'January': 'Zion',
            'February': 'Clarice',
            'March': 'Mark',
            'April': 'Glenda',
            'May': 'Mary',
            'June': 'Nicholas',
            'July': 'Pat',
            'August': 'Mary',
            'September': 'Theresa',
            'October': 'Heather',
            'November': 'Cherie',
            'December': 'Alicia'
        };

        for (key in month) {
            if (month.hasOwnProperty(key)) {
                var
                    li = doc.createElement('li');

                li.innerHTML = key + ': ' + month[key];
                birth.appendChild(li);
            }
        }
    }

    name.addEventListener('click', displayBirthMonth);

})(document);

// Requirement 5
function displaySelectMonths() {
    var
        months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October',
            'November', 'December'];
    var i = 0;
    while (i < months[i].length) {
        i++;
        var result = document.getElementById('result').innerHTML = " " + months + " ";
    }
}

// Requirement 6
function changejQueryMessage() {
    var str, txt;
    str = document.getElementById('changedText').innerHTML;
    txt = str.replace(/JavaScript makes me cry/i, "JavaScript makes me smile.");
    document.getElementById('changedText').innerHTML = txt;
}

// Requirement 7
"use strict";
function myMode() {
    return 'I just used "strict mode"';
}
document.getElementById('eleven').innerHTML = myMode();

// Requirement 8
(function(doc) {
    "use strict";
    var
        resorts = doc.getElementById('resorts'),
        dest = doc.getElementById('dest');

    function myGetAway() {
        var text = '{ "skiResorts" : [' +
            '{ "resortName":"Telluride" , "resortState":"Colorado" },' +
            '{ "resortName":"Vail" , "resortState":"Colorado" },' +
            '{ "resortName":"Park City" , "resortState":"Utah" } ]}';
        var obj;
        obj = JSON.parse(text);
        var i = -1;
        while (i < text.length) {
            i++;
            var
                p = doc.createElement('p');
            p.innerHTML = obj.skiResorts[i].resortName + ", " + " " + obj.skiResorts[i].resortState;
            dest.appendChild(p);
        }
    }
    resorts.addEventListener('click', myGetAway);
})(document);

// Requirement 9, 10, 11

var player = function (first, last, height, years) {
    this.first = first;
    this.last = last;
    this.height = height;
    this.years = years;
    this.update = function () {
        return ++years;
    };
    function initializePlayer() {
        var matt;
        matt = new player('Matt', 'Forte', '6.2"', 6);
        document.getElementById('newGuy').innerHTML = matt.first + " " + matt.last + "<br>" + matt.height + ", " + matt.years;
        document.getElementById('newStat').innerHTML = matt.update();
        document.getElementById('newData').innerHTML = matt.team();

    }
    player.prototype.team = function () {
        return "Chicago Bears";
    };
};

