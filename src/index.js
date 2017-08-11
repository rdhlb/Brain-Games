import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const iterationsCount = 3; // set the number of questions

const iter = (counter, generateGameData) => {
  if (counter === iterationsCount) {
    return true;
  }

  const gameData = generateGameData();
  const question = car(gameData);
  const calculatedAnswer = cdr(gameData);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === calculatedAnswer) {
    console.log('Correct!');
    return iter(counter + 1, generateGameData);
  }

  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${calculatedAnswer}'.\n`);
  return false;
};

export const makeGame = (generateGameData, rule) => {
  console.log('Welcome to the Brain Games!');

  console.log(rule);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  const gameResult = iter(0, generateGameData);

  return gameResult ? console.log(`Congratulations, ${userName}!`) : console.log(`Let's try again, ${userName}!\n`);
};
