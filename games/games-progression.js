import { brainGames, questionUser, testUser } from '../src/index.js';

export const gameProgression = () => {
  const userName = brainGames();
  console.log('What number is missing in the progression?');
  for (let y = 0; y < 3; y += 1) {
    let numberA = Math.random() * 10;
    numberA = Math.ceil(numberA);
    let numberB = Math.random() * 9;
    numberB = Math.ceil(numberB);
    const empty = [];
    const AreGame = [];
    const Aree = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (const areNumb of Aree) {
      const result = areNumb * numberA;
      AreGame.push(result);
    }
    const randomNumb = '..';
    empty[0] = AreGame[numberB];
    AreGame[numberB] = randomNumb;
    const temp = Number(empty.join());
    const gameAnswer = AreGame.toString().replaceAll(',', ' ');
    const userAnswer = questionUser(gameAnswer);
    testUser(temp, userAnswer);
    if (testUser(userAnswer, temp) === true) {
      console.log('Correct!');
    }
    if (testUser(userAnswer, temp) === false) {
      console.log(`Question: ${gameAnswer}`);
      console.log(`Your answer: ${userAnswer}`);
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${temp}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
