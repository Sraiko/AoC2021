const fs = require('fs');

const lines = fs.readFileSync('inputs.txt', { encoding: 'UTF-8' }).split('\n');

let hposition = 0;
let depth = 0;

lines.map((line, index) => {
  let command = line.split(' ')[0];
  let number = parseInt(line.split(' ')[1]);

  if (command == 'up') {
    depth -= number;
  } else if (command == 'down') {
    depth += number;
  } else if (command == 'forward') {
    hposition += number;
  }
});
console.log(hposition * depth);
