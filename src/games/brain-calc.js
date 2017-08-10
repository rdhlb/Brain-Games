import { cons, car, cdr } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../utils';

const rule = 'What is the result of the expression?\n';

const valueRangeMin = 1;
const valueRangeMax = 100;

const generateExpression = (a, b) => {
  switch (generateNumber(1, 3)) {
    case 1:
      return cons(`${a} - ${b}`, a - b);
    case 2:
      return cons(`${a} + ${b}`, a + b);
    case 3:
      return cons(`${a} * ${b}`, a * b);
    default:
      return '';
  }
};

const askCalc = () => {
  const num1 = generateNumber(valueRangeMin, valueRangeMax);
  const num2 = generateNumber(valueRangeMin, valueRangeMax);
  const expression = generateExpression(num1, num2);
  const question = car(expression);
  const answer = String(cdr(expression));
  const game = cons(question, answer);
  return game;
};

const startCalcGame = () => makeGame(askCalc, rule);

export default startCalcGame;
