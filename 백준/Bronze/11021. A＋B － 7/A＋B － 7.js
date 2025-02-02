const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

const T = input[0][0];

for (let i = 1; i <= T; i++) {
  console.log(`Case #${i}: ${input[i][0] + input[i][1]}`);
}
