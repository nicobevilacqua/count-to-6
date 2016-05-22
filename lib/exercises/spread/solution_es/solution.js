var numbers = process.argv.slice(2);
var min = Math.min(...numbers);

console.log(`El valor mínimo en [${numbers}] es ${min}`);
