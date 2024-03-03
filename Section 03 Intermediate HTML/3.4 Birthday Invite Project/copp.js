function calculateDaysBetweenDates(begin, end) {
  var millisecondsPerDay = 86400000;
  var diff = end - begin;
  return Math.floor(diff / millisecondsPerDay);
}

function dataTypes() {
  var dataTypes = {
    "string": "string",
    "number": 1,
    "boolean": true,
    "undefined": undefined,
    "null": null,
    "array": [],
    "object": {}
  };
  return dataTypes;
}

console.log(dataTypes());