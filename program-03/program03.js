/**
 * Created by Cherie Tabb on 9/14/2015.
 */
function myTemp() {
    var x = document.getElementById('temp');
    if (x >= 90) {
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
