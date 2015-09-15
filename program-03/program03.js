/**
 * Created by Cherie Tabb on 9/14/2015.
 */
function myTemp() {
    var x = document.getElementById('temp');
    var err = 'invalid';

    try {
        if (x > 140);
        if (x < -50);
    }
    catch(err) {
        console.log("Input is " + err);
    }

    if (x > 90) {
        console.log('foo');
        console.log('Hot!');
    } else if ((x < 90) && ( x > 80)) {
        console.log('Mighty Warm');
    } else if ((x < 70) && (x > 60)) {
        console.log('Pleasant');
    } else if ((x <= 60) && (x >= 40)) {
        console.log('Chilly');
    } else {
        console.log('Burr!');
    }
}
