const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();
const n = Number(input);

let answer = 0;
for (let i = 1; i <= n; i++) {
  answer += i;
}

console.log(answer);
