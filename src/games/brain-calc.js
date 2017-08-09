import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../utils';

const valueRangeMin = 1;
const valueRangeMax = 20;

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

const calculateAnswer = (operator, a, b) => {
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
  const expression = `${num1} ${operator} ${num2}`;
  const result = calculateAnswer(operator, num1, num2);
  const pair = cons(expression, result);
  return pair;
};

const startCalcGame = () => makeGame(askCalc);

export default startCalcGame;
