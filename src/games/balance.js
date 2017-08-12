import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../utils';

const rule = 'Balance the given number.';

const valueRangeMin = 10;
const valueRangeMax = 20000;

const getBalancedAsString = (num) => {
  const numerals = String(num);
  const numeralsList = numerals.split('').map(element => Number(element));
  const length = numeralsList.length;

  const iter = (sortedNumerals) => {
    const balancedNumber = sortedNumerals;

    if (balancedNumber[length - 1] - balancedNumber[0] > 1) {
      balancedNumber[length - 1] -= 1;
      balancedNumber[0] += 1;

      return iter(balancedNumber.sort());
    }

    return balancedNumber.join('');
  };

  return iter(numeralsList.sort());
};

const askBalance = () => {
  const num = generateNumber(valueRangeMin, valueRangeMax);
  const question = `${num}`;
  const answer = getBalancedAsString(num);
  const game = cons(question, answer);
  return game;
};

const startBalanceGame = () => makeGame(askBalance, rule);

export default startBalanceGame;
