const add = (num1, num2) => {
  return Number(num1) + Number(num2)
}

const subtract = (num1, num2) => {
  return Number(num1) - Number(num2)
}

const multiply = (num1, num2) => {
  return Number(num1) * Number(num2)
}

const divide = (num1, num2) => {
  return Number(num1) / Number(num2)
}

const calculator = {
  'add': add,
  'subtract': subtract,
  'multiply': multiply,
  'divide': divide,
};

module.exports = calculator;