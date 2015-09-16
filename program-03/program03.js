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
    var x = document.getElementById('month');
    var month = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    var b = month[x];
    var y = "";
    try {
        x < 1;
        x > 12;
    }
    catch (e) {
        alert('Number must be 1 - 12!');
    }
    switch (x) {
        case 1:
            b = 'January';
            break;
        case 2:
            b = 'Februrary';
            break;
        case 3:
            b = 'March';
            break;
        case 4:
            b = 'April';
            break;
        case 5:
            b = 'May';
            break;
        case 6:
            b = 'June';
            break;
        case 7:
            b = 'July';
            break;
        case 8:
            b = 'August';
            break;
        case 9:
            b = 'September';
            break;
        case 10:
            b = 'October';
            break;
        case 11:
            b = 'November';
            break;
        case 12:
            b = 'December';
            break;
    }
    document.write('You picked ' + b);

};
