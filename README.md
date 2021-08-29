# Demerit-Points
#### Basic algorithm


###  You need to write a function that takes the speed of a car as input and calculates the number of points based on the following rules:

- The speed limit is 70.
- For every 5 km/h over the speed limit, 1 point is added.
- If the driver accumulates 12 points, their license is suspended.


Example usage:

console.log(checkSpeed(60));  // Output: Ok

console.log(checkSpeed(75));  // Output: Points: 1

console.log(checkSpeed(85));  // Output: Points: 3

console.log(checkSpeed(135)); // Output: License suspended