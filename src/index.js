import readlineSync from 'readline-sync';

export const brainGames = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const questionUser = (numberA, operator = ' ', numberB = ' ') => {
  console.log(`Question: ${numberA} ${operator} ${numberB}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return Number(userAnswer);
};

export const testUser = (user, game) => {
  if (user === game) {
    return true;
  }
  if (user !== game) {
    return false;
  }
  return testUser();
};

export const questUserYesNo = (numberA) => {
  console.log(`Question: ${numberA}`);
  const userYesNo = readlineSync.question('Your answer: ');
  return userYesNo;
};
