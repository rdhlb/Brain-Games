#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { askName, generateNumber, isEven } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".\n');

const userName = askName();

const askNumber = () => {
  const iter = (counter) => {
    // set the number of questions at line below
    if (counter === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const randomNum = generateNumber(1, 100); // set the range of numbers (min, max)
    console.log(`Question: ${randomNum}`);
    const answer = readlineSync.question('Your answer: ');
    if ((isEven(randomNum) && answer === 'yes') || (!isEven(randomNum) && answer === 'no')) {
      console.log('Correct!');
      return iter(counter + 1);
    }

    return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven(randomNum) ? 'yes' : 'no'}'.\n Let's try again, ${userName}!`);
  };

  return iter(0);
};

askNumber();
