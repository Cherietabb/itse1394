/**
 * Created by Cherie Tabb on 9/14/2015.
 */
function myTemp() {
    var x,temp, message, e;
    message = document.getElementById('temp');
    message.innerHTML = "";
    x = document.getElementById('temp').value;
    e = "value outside accepted parameters";
    try {
        if (x > 140) throw "invalid";
        if ((x > 90) && (x <= 140)) {
            console.log('foo');
            alert('Hot!');
        } else if ((x >= 80) && (x <= 90)) {
            alert('Mighty Warm!');
        } else if ((x > 60) && (x <= 70)) {
            alert('Pleasant!');
        } else if ((x >= 40) && (x <= 60)) {
            alert('Chilly!');
        } else if ((x <= 39) && (x > -50)) {
            alert('freezing!');
        } else {
            alert(x + ' degrees');
        }
        if (x < -50) throw "invalid";
    }
    catch(e) {
        message.innerHTML = e.message;
    }
}

// Requirement 2

function getMonth() {
    var message, x, text;
    message = document.getElementById('message');

    x = document.getElementById('month').value;
    month = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    try {
        switch (x) {
            case 1:
                text = 'You picked ' + month;
                break;
            case 2:
                text = 'You picked ' + month;
                break;
            case 3:
                text = 'You picked ' + month;
                break;
            case 4:
                text = 'You picked ' + month;
                break;
            case 5:
                text = 'You picked ' + month;
                break;
            case 6:
                text = 'You picked ' + month;
                break;
            case 7:
                text = 'You picked ' + month;
                break;
            case 8:
                text = 'You picked ' + month;
                break;
            case 9:
                text = 'You picked ' + month;
                break;
            case 10:
                text = 'You picked ' + month;
                break;
            case 11:
                text = 'You picked ' + month;
                break;
            case 12:
                text = 'You picked ' + month;
                break;
            default:
                break;
        }
        if (x < 1 || x > 12)
            alert('Number must be 1 - 12!');
        return false;
        }
    catch (e) {
        message.innerHTML = e.message;
    }
    document.getElementById("demo").innerHTML = text;
}

// Requirement 3
function getNum() {
    var x, num, message;
    message = document.getElementById('num');
    message.innerHTML = "";

}

