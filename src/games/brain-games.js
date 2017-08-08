import readlineSync from 'readline-sync';
import { askName } from '../utils';

export const iterationsCount = 3; // set the number of questions
export const valueRangeMin = 1;
export const valueRangeMax = 20;

export const makeGame = (logic) => {
  const userName = askName();

  const iter = (counter) => {
    if (counter === iterationsCount) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const realAnswer = logic();
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (userAnswer === realAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }

    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.\n Let's try again, ${userName}!\n`);
  };

  return iter(0);
};
