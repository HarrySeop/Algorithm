const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

const basket = input[0][0];
const count = input[0][1];
let array = Array.from({ length: basket }, (_, index) => index + 1);

for (let i = 1; i <= count; i++) {
  let [start, end] = input[i];

  let temp = array[start - 1];
  array[start - 1] = array[end - 1];
  array[end - 1] = temp;
}

console.log(array.join(' '));
