import readlineSync from 'readline-sync';

export const iterationsCount = 3; // set the number of questions
export const valueRangeMin = 1;
export const valueRangeMax = 20;

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  return name;
};

const isNumber = value => typeof value === 'number';

export const makeGame = (logic) => {
  const userName = askName();

  const iter = (counter) => {
    if (counter === iterationsCount) {
      return console.log(`Congratulations, ${userName}!`);
    }

    const realAnswer = logic();
    const stringAnswer = readlineSync.question('Your answer: ');
    const userAnswer = isNumber(realAnswer) ? Number(stringAnswer) : stringAnswer;
    if (userAnswer === realAnswer) {
      console.log('Correct!');
      return iter(counter + 1);
    }

    return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.\n Let's try again, ${userName}!\n`);
  };

  return iter(0);
};
