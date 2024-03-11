import { brainGames, questUserYesNo, testUser } from '../src/index.js';

const gamePrime = () => {
  const userName = brainGames();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let y = 0; y < 3; y += 1) {
    let numberA = Math.random() * 10;
    numberA = Math.ceil(numberA);
    let prime = numberA !== 1;
    for (let i = 2; i < numberA; i += 1) {
      if (numberA % i === 0) {
        prime = false;
        break;
      }
    }
    let result;
    if (prime === true) {
      result = 'yes';
    }
    if (prime === false) {
      result = 'no';
    }
    const userYesNo = questUserYesNo(numberA);
    if (testUser(userYesNo, result) === true) {
      console.log('Correct!');
    }
    if (testUser(userYesNo, result) === false) {
      console.log(`Question: ${numberA}`);
      console.log(`${userYesNo} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gamePrime();
