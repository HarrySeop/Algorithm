const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [dice1, dice2, dice3] = input;

if (dice1 === dice2 && dice2 === dice3) {
  console.log(10000 + dice1 * 1000);
} else if (dice1 === dice2 && dice2 !== dice3) {
  console.log(1000 + dice1 * 100);
} else if (dice1 !== dice2 && dice2 === dice3) {
  console.log(1000 + dice2 * 100);
} else if (dice1 === dice3 && dice1 !== dice2) {
  console.log(1000 + dice1 * 100);
} else {
  const maxDice = Math.max(...input);
  console.log(maxDice * 100);
}
