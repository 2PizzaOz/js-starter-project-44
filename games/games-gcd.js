import { brainGames, questionUser, testUser } from '../src/index.js';

const gameNod = () => {
  const userName = brainGames();
  console.log('Find the greatest common divisor of given numbers.');
  for (let y = 0; y < 3; y += 1) {
    let numberA = Math.random() * 20;
    numberA = Math.ceil(numberA);
    let numberB = Math.random() * 20;
    numberB = Math.ceil(numberB);
    const operator = '';
    let smallNumber;
    if (numberA <= numberB) {
      smallNumber = numberA;
    }
    if (numberA > numberB) {
      smallNumber = numberB;
    }
    const userAnswer = questionUser(numberA, operator, numberB);
    let largerDivider;
    for (let i = smallNumber; i > 0; i -= 1) {
      const result = (smallNumber / i);
      if (Number.isInteger(result) === true) {
        largerDivider = i;
      }
      if (numberA % largerDivider === 0 && numberB % largerDivider === 0) {
        break;
      }
    }
    if (testUser(userAnswer, largerDivider) === true) {
      console.log('Correct!');
    }
    if (testUser(userAnswer, largerDivider) === false) {
      console.log(`Question: ${numberA} ${numberB}`);
      console.log(`Your answer: ${userAnswer}`);
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${largerDivider}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameNod();
