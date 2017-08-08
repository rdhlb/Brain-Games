import readlineSync from 'readline-sync';
import { askName, generateNumber } from '../utils';
import { iterationsCount, valueRangeMin, valueRangeMax } from '../index';

const isEven = num => num % 2 === 0;

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = askName();

const askNumber = () => {
  const iter = (counter) => {
    if (counter === iterationsCount) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const randomNum = generateNumber(valueRangeMin, valueRangeMax);
    console.log(`Question: ${randomNum}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const realAnswer = isEven(randomNum) ? 'yes' : 'no';
    if (realAnswer === userAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }

    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.\n Let's try again, ${userName}!`);
  };

  return iter(0);
};

export default askNumber;
