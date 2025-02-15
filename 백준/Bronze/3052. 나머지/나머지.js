const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const answerArray = new Set(input.map(v => v % 42));
console.log(answerArray.size);
