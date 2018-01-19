var fromOtherFile = require('./numberList');

fromOtherFile.setNumber(100);
fromOtherFile.setNumber(501);
fromOtherFile.setNumber(500);
fromOtherFile.setNumber(-1);
fromOtherFile.setNumber(50);
console.log(fromOtherFile.getSorted());