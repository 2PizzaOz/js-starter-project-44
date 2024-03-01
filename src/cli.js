import readlineSync from 'readline-sync';

export function brainGames() {
  const userName = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + userName + '!');

}
