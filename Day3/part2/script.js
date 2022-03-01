const fs = require('fs');

const lines = fs.readFileSync('inputs.txt', { encoding: 'UTF-8' }).split('\n');

const length = lines[0].length;
let ones = Array(length).fill(0);
let zeroes = Array(length).fill(0);
let gamma = '';
let epsilon = '';

for (const line of lines) {
  const digits = [...line];
  digits.forEach((digit, index) => {
    if (digit === '0') {
      zeroes[index]++;
    } else {
      ones[index]++;
    }
  });
}
for (i = 0; i < length; i++) {
  if (ones[i] > zeroes[i]) {
    gamma += 1;
    epsilon += 0;
  } else {
    gamma += 0;
    epsilon += 1;
  }
}
let powerCon = parseInt(gamma, 2) * parseInt(epsilon, 2);
console.log(
  'Gamma: ' +
    gamma +
    '\nEpsilon: ' +
    epsilon +
    '\nPower consumption: ' +
    powerCon
);
