import generateNumber from '../utils';
import { valueRangeMin, valueRangeMax } from '../index';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const isEven = num => num % 2 === 0;

const askNumber = () => {
  const num = generateNumber(valueRangeMin, valueRangeMax);
  console.log(`Question: ${num}`);
  const realAnswer = isEven(num) ? 'yes' : 'no';
  return realAnswer;
};

export default askNumber;
