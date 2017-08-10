import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../utils';

const rule = 'Answer "yes" if number even otherwise answer "no".\n';

const valueRangeMin = 1;
const valueRangeMax = 100;

const isEven = num => num % 2 === 0;

const askEven = () => {
  const num = generateNumber(valueRangeMin, valueRangeMax);
  const question = `${num}`;
  const answer = isEven(num) ? 'yes' : 'no';
  const game = cons(cons(rule, question), answer);
  return game;
};

const startEvenGame = () => makeGame(askEven);

export default startEvenGame;
