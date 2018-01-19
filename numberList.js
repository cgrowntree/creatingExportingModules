var array = [];

function setNumber(num) {
  array.push(num);
}
module.exports.setNumber = setNumber;

function sortfunction (a, b) {
  return (a - b);
}

function getSorted () {
  array.sort(sortfunction);
  return array;
}
module.exports.getSorted = getSorted;