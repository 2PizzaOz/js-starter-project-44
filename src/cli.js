import readlineSync from 'readline-sync';

function brainGames() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}
export default brainGames();
