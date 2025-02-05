const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

const N = input[0][0];
const v = input[2][0];
const list = input[1];
// console.log(list.filter(el => el === v).length);
console.log(list.reduce((cnt, el) => cnt + (el === v), 0));
