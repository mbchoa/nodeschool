var fs = require('fs');
var numNewLine = fs.readFileSync(process.argv[2])
					.toString()
					.split('\n')
					.length-1;
console.log(numNewLine);