const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const [A, B] = input;
const units = Number(B.toString()[2]);
const tens = Number(B.toString()[1]);
const hundreds = Number(B.toString()[0]);

console.log(A * units);
console.log(A * tens);
console.log(A * hundreds);
console.log(A * B);
