// Code your solution in this file!
const returnFirstTwoDrivers = function(array){
    return array.slice(0,2);
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}

let selectingDrivers = [];
selectingDrivers.push(returnLastTwoDrivers);
selectingDrivers.unshift(returnFirstTwoDrivers);

function createFareMultiplier(integer){
    return function(){
        return integer*5;
    }
}

function fareDoubler(integer){
    return 2*integer;
}

function fareTripler(integer){
    return 3*integer;
}

function selectDifferentDrivers (array, driverFunction){
    return driverFunction(array);
}