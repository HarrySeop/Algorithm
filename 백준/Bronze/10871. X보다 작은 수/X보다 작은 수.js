const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

const N = input[0][0];
const X = input[0][1];

const answer = [];

for (let i = 0; i < N; i++) {
  if (input[1][i] < X) {
    answer.push(input[1][i]);
  }
}

console.log(answer.join(' '));
