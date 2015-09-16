/**
 * Created by Cherie Tabb on 9/14/2015.
 */
function myTemp() {
    var x = document.getElementById('temp');
    //var err = 'invalid';
    //
    //try {
    //    if (x > 140);
    //    if (x < -50);
    //}
    //catch(err) {
    //    console.log("Input is " + err);
    //}

    if (x > 90) {
        console.log('foo');
        console.log('Hot!');
    } else if ((x < 90) && ( x > 80)) {
        console.log('Mighty Warm');
    } else if ((x < 70) && (x > 60)) {
        console.log('Pleasant');
    } else if ((x <= 60) && (x >= 40)) {
        console.log('Chilly');
    }
}
// Requirement 2



function getMonth() {
    var x;
    var month;
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
                b = 'Februrary';
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
