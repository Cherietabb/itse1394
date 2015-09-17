/**
 * Created by Cherie Tabb on 9/14/2015.
 */
function myTemp() {
    var x,temp, message;
    message = document.getElementById('temp');
    message.innerHTML = "";
    x = document.getElementById('temp').value;
    try {
        if (x >= 90) {
            console.log('foo');
            alert('Hot!');
        } else if ((x >= 80) && (x < 90)) {
            alert('Mighty Warm');
        } else if ((x > 60) && (x <= 70)) {
            alert('Pleasant');
        } else if ((x >= 40) && (x <= 60)) {
            alert('Chilly');
        } else if (x <= 39) {
            alert('Burr!');
        } else {
            alert(x + ' degrees');
        }
        if (x < -50 || x > 140) throw "value outside accepted parameters";
        return false;
    }
    catch(e) {
        message.innerHTML = e.message;
    }
    return true

}

// Requirement 2

function getMonth() {
    var x, month, message;
    message = document.getElementById('month');
    message.innerHTML = "";
    month = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    x = document.getElementById('month').value;
    try {
        switch (x) {
            case 1:
                month = 'January';
                break;
            case 2:
                month = 'Februrary';
                break;
            case 3:
                month = 'March';
                break;
            case 4:
                month = 'April';
                break;
            case 5:
                month = 'May';
                break;
            case 6:
                month = 'June';
                break;
            case 7:
                month = 'July';
                break;
            case 8:
                month = 'August';
                break;
            case 9:
                month = 'September';
                break;
            case 10:
                month = 'October';
                break;
            case 11:
                month = 'November';
                break;
            case 12:
                month = 'December';
                break;

        }
        if (x < 1 || x > 12)
            alert('Number must be 1 - 12!');
        return false;
        }
    catch (e) {
        message.innerHTML = e.message;
    }
    alert('You picked ' + month[x - 1]);
    return true;
}
