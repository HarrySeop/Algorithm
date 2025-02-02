const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

const X = input[0][0];
const N = input[1][0];
let money = 0;

for (let i = 2; i < N + 2; i++) {
  money += input[i][0] * input[i][1];
}

console.log(X === money ? 'Yes' : 'No');
