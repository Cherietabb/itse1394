/**
 * Created by Cherie Tabb on 9/14/2015.
 */
function myTemp() {
    var x,temp;
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
        if (x < -50) throw {message: "invalid input"}
        if (x > 140) throw {message: "invalid input"}
    }
    catch(e) {
        alert("Error: "+e.message)
    }
}

// Requirement 2

function getMonth() {
    var x, month;
    x = document.getElementById('month').value;
    month = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', "August", 'September', 'October', 'November', 'December'];
    try {
        switch (x) {
            case 1:
                console.log('tree');
                alert('January');
                break;
            case 2:
                alert('February');
                break;
            case 3:
                alert('March');
                break;
            case 4:
                alert('April');
                break;
            case 5:
                alert('May');
                break;
            case 6:
                alert('June');
                break;
            case 7:
                alert('July');
                break;
            case 8:
                alert('August');
                break;
            case 9:
                alert('September');
                break;
            case 10:
                alert('October');
                break;
            case 11:
                alert('November');
                break;
            case 12:
                alert('December');
                break;
            default:
                alert('Strawberries')
                break;
        }
        if (x < 1 || x > 12)
            throw {message: 'Number must be 1 - 12!'}
        if (isNaN(x))
            throw {message: 'Must enter a number!'}
        if (x = "")
            throw {message: 'input is empty!'}
        }
    catch (e) {
        alert("Error: "+e.message)
    }
}

// Requirement 3
function getNum() {
    var x, num, message;
    message = document.getElementById('message');
    message.innerHTML = "";
    x = document.getElementById('num');



}

