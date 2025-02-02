const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

const [A, B] = input[0];
const C = input[1][0];

const allTime = A * 60 + B + C;

let calcHour = Math.floor(allTime / 60);
if (calcHour >= 24) {
  calcHour -= 24;
}

const calcMinute = allTime % 60;

console.log(calcHour, calcMinute);
