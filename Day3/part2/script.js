const fs = require('fs');

const lines = fs.readFileSync('inputs.txt', { encoding: 'UTF-8' }).split('\n');

const count = (lines) => {
  let ones = Array(lines[0].length).fill(0);
  let zeros = Array(lines[0].length).fill(0);
  for (const line of lines) {
    const bits = [...line];
    bits.forEach((bit, index) => {
      if (bit === '0') {
        zeros[index]++;
      } else {
        ones[index]++;
      }
    });
  }
  return { zeros, ones };
};

const commonBit = (zeros, ones, index) => {
  let mostCommon = '';
  let leastCommon = '';
  if (zeros[index] > ones[index]) {
    mostCommon = '0';
    leastCommon = '1';
  } else if (zeros[index] === ones[index]) {
    mostCommon = '1';
    leastCommon = '0';
  } else {
    mostCommon = '1';
    leastCommon = '0';
  }
  return { mostCommon, leastCommon };
};

const oxGen = (lines, index = 0) => {
  const { zeros, ones } = count(lines);
  const { mostCommon } = commonBit(zeros, ones, index);
  const filter = lines.filter((line) => line[index] === mostCommon);

  if (filter.length === 1) {
    return filter[0];
  }
  return oxGen(filter, index + 1);
};

const co2Scrub = (lines, index = 0) => {
  const { zeros, ones } = count(lines);
  const { leastCommon } = commonBit(zeros, ones, index);

  const filter = lines.filter((line) => line[index] === leastCommon);
  if (filter.length === 1) {
    return filter[0];
  }
  return co2Scrub(filter, index + 1);
};

console.log(parseInt(oxGen(lines), 2) * parseInt(co2Scrub(lines), 2));
