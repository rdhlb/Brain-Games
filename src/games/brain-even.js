import { cons } from 'hexlet-pairs';
import { makeGame, generateNumber } from '..';

const valueRangeMin = 1;
const valueRangeMax = 20;

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const isEven = num => num % 2 === 0;

const askEven = () => {
  const num = generateNumber(valueRangeMin, valueRangeMax);
  const expression = `${num}`;
  const result = isEven(num) ? 'yes' : 'no';
  const pair = cons(expression, result);
  return pair;
};

const startEvenGame = () => makeGame(askEven);

export default startEvenGame;
