const fs = require('fs');

const lines = fs.readFileSync('inputs.txt', {encoding: 'UTF-8'}).split('\n');

let hposition = 0;
let depth = 0; 
let aim = 0;

lines.map((line, index) => {
	let command = line.split(' ')[0];
	let number = parseInt(line.split(' ')[1]);

	switch (command) {
		case "up":
			aim -= number;		
			break;
		case "down":
			aim += number;
			break;
		case "forward":
			hposition += number;
			depth += aim * number
			break;
		default:
			break;
	}
});
console.log(hposition * depth);
