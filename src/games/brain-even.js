import readlineSync from 'readline-sync';
import { askName, generateNumber, isEven, welcome } from '../utils';

const askNumber = () => {
  const iterations = 3; // set the number of questions
  const numberRangeMin = 1;
  const numberRangeMax = 100;

  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".\n');

  const userName = askName();

  const iter = (counter) => {
    if (counter === iterations) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const randomNum = generateNumber(numberRangeMin, numberRangeMax);
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
