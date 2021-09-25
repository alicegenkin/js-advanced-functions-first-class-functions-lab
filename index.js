// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
let newArr = []
  newArr.push(drivers[0], drivers[1])
  return newArr
}

const returnLastTwoDrivers = function(drivers) {
  let newArr = []
  newArr.push(drivers[drivers.length-2])
  newArr.push(drivers[drivers.length-1])
  return newArr
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function (multiplyValue) {
return function(value) {
  return value*value
}}

function fareDoubler(fare) {
  return fare * 2
}

function fareTripler(fare) {
  return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, functionOfDrivers) {
  return functionOfDrivers(arrayOfDrivers);
}