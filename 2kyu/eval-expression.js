// Instructions

// Given a mathematical expression as a string you must return the result as a number.
// Numbers

// Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.
// Operators

// You need to support the following mathematical operators:

//     Multiplication *
//     Division / (as floating point division)
//     Addition +
//     Subtraction -

// Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.
// Parentheses

// You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6
// Whitespace

// There may or may not be whitespace between numbers and operators.

// An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10

// And the following are invalid expressions

// 1 - - 1    // Invalid
// 1- - 1     // Invalid
// 6 + - (4)  // Invalid
// 6 + -(- 4) // Invalid

// Validation

// You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.
// Restricted APIs

// NOTE: Both eval and Function are disabled.

// My solution: WORK IN PROGRESS

var calc = function (expression) {
  // evaluate `expression` and return result
  let arr = expression.split(" ");
  let result = 0;
  let operator = "+";
  let stack = [];
  let num = 0;
  let sign = 1;
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];
    if (char === "(") {
      stack.push(result);
      stack.push(operator);
      result = 0;
      operator = "+";
    } else if (char === ")") {
      result = stack.pop()(result, num);
      num = 0;
      result = stack.pop()(result, num);
      num = 0;
    } else if (char === "+" || char === "-" || char === "*" || char === "/") {
      operator = getOperator(char);
    } else {
      num = Number(char);
      result = operator(result, num);
      num = 0;
    }
  }
  return result;
};
