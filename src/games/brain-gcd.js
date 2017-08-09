import { cons } from 'hexlet-pairs';
import { makeGame, generateNumber } from '..';

const valueRangeMin = 1;
const valueRangeMax = 20;

console.log('Welcome to the Brain Games!');
console.log('Find the greatest common divisor of given numbers.\n');

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

const askGcd = () => {
  const num1 = generateNumber(valueRangeMin, valueRangeMax);
  const num2 = generateNumber(valueRangeMin, valueRangeMax);
  const expression = `${num1} ${num2}`;
  const result = getGcd(num1, num2);
  const pair = cons(expression, result);
  return pair;
};

const startGcdGame = () => makeGame(askGcd);

export default startGcdGame;
