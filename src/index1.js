import readlineSync from 'readline-sync';

export function whichNumber() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`'Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    let number = Math.random() * 10;
    number = Math.ceil(number);
    const question = (number % 2 === 0) ? 'yes' : 'no';
    console.log(`Question: ${number}`);
    const userNumber = readlineSync.question('');
    if (userNumber === question) {
      continue;
    }
    if (userNumber !== question) {
      console.log(`'${userNumber}' is wrong answer ;(. Correct answer was '${question}'.
    Let's try again, ${userName}`);
      break;
    }
  }
  return console.log(`Congratulations, ${userName}`);
}
