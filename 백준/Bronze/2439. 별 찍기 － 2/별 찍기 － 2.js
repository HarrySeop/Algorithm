const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();
const N = Number(input);

for (let i = 1; i <= N; i++) {
  console.log(`${' '.repeat(N - i)}${'*'.repeat(i)}`);
}
