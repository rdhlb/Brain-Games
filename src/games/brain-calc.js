import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../utils';

const valueRangeMin = 1;
const valueRangeMax = 100;

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
  const rule = 'What is the result of the expression?\n';
  const num1 = generateNumber(valueRangeMin, valueRangeMax);
  const num2 = generateNumber(valueRangeMin, valueRangeMax);
  const operator = generateOperator();
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculateAnswer(operator, num1, num2);
  const game = cons(cons(rule, question), answer);
  return game;
};

const startCalcGame = () => makeGame(askCalc);

export default startCalcGame;
