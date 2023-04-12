const sum = (num1, num2) => num1 + num2;
const PI = 3.14;

class SomeMathObject {
  constructor() {
    console.log("Object Created !");
  }
}

/* we can use this to export the function */
// module.exports = sum;

/* we can export multiple function, variables like this */

//method one
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.SomeMathObject = SomeMathObject;
