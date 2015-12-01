/**
 * Created by Cherie on 9/8/2015.
 */
function myButton() {
    document.getElementById('press').style.background='#FF6699';
}

//Requirements 2, 3, 4, 5, 6
myAircraft = {
    type: 'jet',
    manufacturer: 'Boeing',
    maxPassengers: 10,
    maxRange: 5
};

myAircraft.takeOff = function() {
        document.getElementById('take-off').innerHTML = 'prepare for take off!';
};

myAircraft.climb = function() {
    document.getElementById('height').innerHTML = 'We are " + maxRange + " miles high!';
};

myAircraft.descend = function() {
    return descend;
};

myAircraft.land = function() {
    return land;
};

//requirement 7
function myColor() {
    var x = prompt('Please enter text');
    if(x == 'purple') {
        x = 'yellow';
    }
    document.getElementById('color').innerHTML = x;
}

//Requirement 8
function myNumber() {
    var x = document.getElementById('text').value;
    if (x <= 10) {
        document.getElementById('number').innerHTML = "$" + x;
    }
}
