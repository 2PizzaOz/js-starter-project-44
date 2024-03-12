import { questUserYesNo, brainGames } from '../src/index.js';

function whichNumber() {
  const userName = brainGames();
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    let number = Math.random() * 10;
    number = Math.ceil(number);
    const question = (number % 2 === 0) ? 'yes' : 'no';
    const userYesNo = questUserYesNo(number);
    if (userYesNo === question) {
      console.log('Correct!');
    }
    if (userYesNo !== question) {
      console.log(`${userYesNo} is wrong answer ;(. Correct answer was ${question}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
export default whichNumber();
