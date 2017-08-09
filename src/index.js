import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const iterationsCount = 3; // set the number of questions

export const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

export const generateNumber = (min, max) => Math.floor(min + (Math.random() * ((max + 1) - min)));

const isNumber = value => typeof value === 'number';

export const makeGame = (getPair) => {
  const userName = askName();

  const iter = (counter) => {
    if (counter === iterationsCount) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const gameData = getPair();
    const gameQuestion = car(gameData);
    const gameResult = cdr(gameData);
    const calculatedAnswer = gameResult;
    console.log(`Question: ${gameQuestion}`);
    const recievedAnswer = readlineSync.question('Your answer: ');
    const userAnswer = isNumber(calculatedAnswer) ? Number(recievedAnswer) : recievedAnswer;

    if (userAnswer === calculatedAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }

    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calculatedAnswer}'.\nLet's try again, ${userName}!\n`);
  };

  return iter(0);
};
