const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [H, M] = input;

if (M < 45) {
  if (H === 0) {
    console.log(`${H + 23} ${M + 60 - 45}`);
  } else {
    console.log(`${H - 1} ${M + 60 - 45}`);
  }
} else {
  console.log(`${H} ${M - 45}`);
}
