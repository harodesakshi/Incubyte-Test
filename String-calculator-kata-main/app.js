module.exports = class StringCalculator {
  constructor() {}
  //add method
  add(numberString = "", delimiter = ",") {
    let sum = 0;
    let current = 0;
    this.splitString(numberString, delimiter).forEach((number) => {
      // console.log(number);
      current = this.checkNumber(number);
      sum += current;
    });

    return sum;
  }
  //sepating numbers
  splitString(string, delimiter) {
    return string.split(delimiter);
  }
  //check if number is valid
  checkNumber(ch) {
    let ans;
    if (ch === "") {
      ans = 0;
    } else {
      if (!isNaN(ch * 1)) {
        if (ch < 0) {
          throw Error("Negative numbers not allowed!");
        } else if (ch > 1000) {
          ans = 0;
        } else {
          ans = parseInt(ch);
        }
      } else {
        if (ch == ch.toUpperCase()) {
          throw Error("Uppercase letters not allowed!");
        }
        if (ch == ch.toLowerCase()) {
          ans = ch.charCodeAt(0) - 97 + 1;
        }
      }
    }

    return ans;
  }
};
