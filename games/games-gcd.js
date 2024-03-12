import { brainGames, questionUser, testUser } from '../src/index.js';

const gameNod = () => {
  const userName = brainGames();
  console.log('Find the greatest common divisor of given numbers.');
  for (let y = 0; y < 3; y += 1) {
    let number1 = Math.random() * 20;
    number1 = Math.ceil(number1);
    let number2 = Math.random() * 20;
    number2 = Math.ceil(number2);
    let smallNumber;
    if (number1 <= number2) {
      smallNumber = number1;
    }
    if (number1 > number2) {
      smallNumber = number2;
    }
    const userAnswer = questionUser(number1, number2);
    let largerDivider;
    for (let i = smallNumber; i > 0; i -= 1) {
      const result = (smallNumber / i);
      if (Number.isInteger(result) === true) {
        largerDivider = i;
      }
      if (number1 % largerDivider === 0 && number2 % largerDivider === 0) {
        break;
      }
    }
    if (testUser(userAnswer, largerDivider) === true) {
      console.log('Correct!');
    }
    if (testUser(userAnswer, largerDivider) === false) {
      console.log(`Question: ${number1} ${number2}`);
      console.log(`Your answer: ${userAnswer}`);
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${largerDivider}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameNod();
