import generateNumber from '../utils';
import { valueRangeMin, valueRangeMax } from '..';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?\n');

const generateOperator = () => {
  switch (generateNumber(1, 3)) {
    case 1:
      return '-';
    case 2:
      return '+';
    case 3:
      return '*';
    default:
      return '';
  }
};

const calculateAnswer = (a, b, operator) => {
  switch (operator) {
    case '-':
      return a - b;
    case '+':
      return a + b;
    case '*':
      return a * b;
    default:
      return '';
  }
};

const askCalc = () => {
  const num1 = generateNumber(valueRangeMin, valueRangeMax);
  const num2 = generateNumber(valueRangeMin, valueRangeMax);
  const operator = generateOperator();
  console.log(`Question: ${num1} ${operator} ${num2}`);
  const realAnswer = calculateAnswer(num1, num2, operator);
  return realAnswer;
};

export default askCalc;
