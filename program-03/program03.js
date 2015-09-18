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
        if (x < -50) throw {message: "invalid input"};
        if (x > 140) throw {message: "invalid input"};

    }
    catch (e) {
        alert("Error: " + e.message)
    }
}

// Requirement 2

function getMonth() {
    var x, month;
    x = document.getElementById('month').value;
    month = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', "August", 'September', 'October', 'November', 'December'];
    //alert('Strawberries');

    try {
        if (x === 1) {
            alert('January');
        } else if (x === 2) {
            alert('February');
        } else if (x === 3) {
            alert('March');
        } else if (x === 4) {
            alert('April');
        } else if (x === 5) {
            alert('May');
        } else if (x === 6) {
            alert('June');
        } else if (x === 7) {
            alert('July');
        } else if (x === 8) {
            alert('August');
        } else if (x === 9) {
            alert('September');
        } else if (x === 10) {
            alert('October');
        } else if (x === 11) {
            alert('November');
        } else if (x === 12) {
            alert('December');
        }
        if (x < 1) throw {message: 'Too low!'};
        if (x > 12) throw {message: 'Number must be 1 - 12!'};
        if (isNaN(x)) throw {message: 'Must enter a number!'};
        if (x === "") throw {message: 'input is empty!'}
    }
    catch (e) {
        alert("Error: " + e.message);
    }
}

// Requirement 3
function getNum() {
    var x, num;
    x = document.getElementById('num').value;
    num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    try {
        switch (x) {
            case 12:
            case 1:
            case 2:
                alert('Winter');
                break;
            case 3:
            case 4:
            case 5:
                alert('Spring');
                break;
            case 6:
            case 7:
            case 8:
                alert('Summer');
                break;
            case 9:
            case 10:
            case 11:
                alert('Fall');
                break;
            default:

        }
        if (x < 1 || x > 12)
            throw {message: 'Number must be 1 - 12!'};
        if (isNaN(x))
            throw {message: 'Must enter a number!'};
        if (x === "")
            throw {message: 'value is empty!'}
    }
    catch (e) {
        alert('Error: ' + e.message)
    }
}

function displayBirthMonth(month) {
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
    var text = "";
    for (var key in month) {
        text += month[key] + '<br>'

    }
    document.getElementById('birth').innerHTML = text;
};
