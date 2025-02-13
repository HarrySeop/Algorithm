const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim();
const num = Number(input);

for (let i = 1; i <= num; i++) {
  const empty = ' '.repeat(num - i);
  const star = '*'.repeat(i + i - 1);
  console.log(empty + star);
}

for (let i = num - 1; i > 0; i--) {
  const empty = ' '.repeat(num - i);
  const star = '*'.repeat(i + i - 1);
  console.log(empty + star);
}
