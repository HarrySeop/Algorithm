const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

const basket = input[0][0];
const count = input[0][1];
let array = Array(basket).fill(0);

for (let i = 1; i <= count; i++) {
  let [start, end, k] = input[i];
  for (start; start <= end; start++) {
    array[start - 1] = k;
  }
}

console.log(array.join(' '));
