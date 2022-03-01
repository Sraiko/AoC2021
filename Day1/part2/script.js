const fs = require('fs');

const lines = fs
  .readFileSync('inputs.txt', { encoding: 'UTF-8' })
  .split('\n')
  .map((x) => parseInt(x));
let counter = 0;

lines.map((number, index) => {
  if (
    number + lines[index + 1] + lines[index + 2] >
    lines[index - 1] + number + lines[index + 1]
  ) {
    counter++;
  }
});
console.log(counter);
