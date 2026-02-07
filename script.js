/* 
Course: COMP-6062
Lab: 4
Student Name: Jonel Raya
Date: 02/07/2026
*/


// Function to calculate the area of triangle
function areaOfTriangle(base, height){
    let triangleArea = (base*height)/2 ;
    return triangleArea.toFixed(1); 
}

// Logs
console.log("========== Area of Triangle ==========");
console.log("Area = ", areaOfTriangle(3, 4));
console.log("Area = ", areaOfTriangle(5, 7));

// Function to calculate the volume of sphere
function volumeOfSphere(radius){
    let volumeSphere = (4/3)*Math.PI*radius**3;
    return volumeSphere.toFixed(1);
}

// Logs
console.log("========== Volume of Sphere ==========");
console.log("Volume = ", volumeOfSphere(3));
console.log("Volume = ", volumeOfSphere(5));

// Function to convert distance to meters
function distanceToMeters(distance, unit){

    let meters = 0;

    if(distance === 0 || unit === 'm')
    {
        meters =  0;// Short circuit
    }

    switch(unit)
    {
        case 'm':
            meters = distance;// Already in meters
            break;
        case 'km':
            meters = distance * 1000;// km --> mtrs
            break;
        case 'y':
            meters =  distance * 0.9144;// yard --> mtrs
            break;
        case 'mi':
            meters =  distance * 1609.34;// mile --> mtrs
            break;
        default:
            meters = 0; 
    }

    return meters.toFixed(2)
}

// Logs
console.log("========== Distance to meters ==========")
console.log(distanceToMeters(50, 'm'),'m');
console.log(distanceToMeters(100, 'y'),'m');
console.log(distanceToMeters(1, 'mi'),'m');
console.log(distanceToMeters(1.234, 'km'),'m');

// Function to convert string time to seconds
function timeStringToSeconds(time){

    let parts = time.split(':');// Remove : character from string and convert to array
    let seconds = 0;

    if (parts.length === 3) {
        seconds += parseInt(parts[2]) || 0; // SS
        seconds += (parseInt(parts[1]) || 0) * 60; // MM
        seconds += (parseInt(parts[0]) || 0) * 3600; // HH
    } else if (parts.length === 2) {
        seconds += (parseInt(parts[1]) || 0); // SS
        seconds += (parseInt(parts[0]) || 0) * 60; // MM
    } else if (parts.length === 1) {
        seconds += (parseInt(parts[0]) || 0); // SS
    }
    
    return seconds;
}

// Logs
console.log("========== Time(string) to seconds ==========");
console.log(timeStringToSeconds('02:33:21'));// Time in HH:MM:SS
console.log(timeStringToSeconds('00:04:51'));// Time in HH:MM:SS
console.log(timeStringToSeconds('04:51'));// Time in MM:SS
console.log(timeStringToSeconds('00:13'));// Time in MM:SS
console.log(timeStringToSeconds('13'));// Time in SS

