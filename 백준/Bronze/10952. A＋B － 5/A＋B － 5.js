const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './example.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(Number));

for (let i = 0; i < input.length; i++) {
  if (input[i][0] === 0 && input[i][1] === 0) {
    process.exit();
  }
  console.log(input[i][0] + input[i][1]);
}
