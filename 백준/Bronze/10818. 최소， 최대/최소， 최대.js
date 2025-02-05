const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

const N = input[0][0];

console.log(`${Math.min(...input[1])} ${Math.max(...input[1])}`);
