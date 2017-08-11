import { cons } from 'hexlet-pairs';
import { makeGame } from '..';
import generateNumber from '../utils';

const rule = 'Balance the given number.\n';

const valueRangeMin = 10;
const valueRangeMax = 1000;

const getMaxOfArray = numArray => Math.max.apply(null, numArray);

const getMinOfArray = numArray => Math.min.apply(null, numArray);

const normalizeToString = (arr) => {
  const ascendingArr = arr.sort();
  return ascendingArr.join('');
};

const balanceArr = (arr) => {
  const balancedArr = arr;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr.length; j += 1) {
      if (arr[i] - arr[j] > 1) {
        balancedArr[i] -= 1;
        balancedArr[j] += 1;
      }
    }
  }
  return balancedArr;
};

const getBalancedAsString = (n) => {
  const str = String(n);
  const strArray = str.split('');
  const numArray = strArray.map(num => Number(num));
  let balancedArray = balanceArr(numArray);
  while (getMaxOfArray(balancedArray) - getMinOfArray(balancedArray) > 1) {
    balancedArray = balanceArr(balancedArray);
  }
  return normalizeToString(balancedArray);
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