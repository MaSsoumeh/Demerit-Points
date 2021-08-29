'use strict'
function checkSpeed(speed) {

    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint) {
        return "ok";
    }
    const points = Math.floor((speed - speedLimit) / kmPerPoint);
    if (points < 12) {
        return points;
    }
    return "License suspended";

}