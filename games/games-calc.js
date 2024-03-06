import { questionUser, testUser, brainGames } from '../src/index.js';

export function calc() {
  const userName = brainGames();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const ops = ['', '+', '-', '*'];
    let randomIndex = Math.random() * 3;
    randomIndex = Math.ceil(randomIndex);
    const operator = ops[randomIndex];

    let numberA = Math.random() * 10;
    numberA = Math.ceil(numberA);

    let numberB = Math.random() * 10;
    numberB = Math.ceil(numberB);

    let result;
    switch (operator) {
      case '+': result = numberA + numberB; break;
      case '-': result = numberA - numberB; break;
      case '*': result = numberA * numberB; break;
    }

    const userAnswer = questionUser(numberA, operator, numberB);

    if (testUser(userAnswer, result) === true) {
      console.log('Correct!');
    }
    if (testUser(userAnswer, result) === false) {
      console.log(`Question: ${numberA} ${operator} ${numberB}`);
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  return console.log(`Congratulations, ${userName}!`);
}
