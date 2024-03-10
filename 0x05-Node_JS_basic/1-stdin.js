/* eslint-disable prefer-arrow-callback */
let inputData = '';

process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.on('data', function myConsole(data) {
  // Process input
  const input = data.toString().trim();
  inputData = input;

  // Output result to stdout'
  process.stdout.write(`Your names is: ${input}\n`);
});

process.stdin.on('close', function display() {
  // process.stdout.write(`{ inputData: ${inputData}, inputData.length: ${inputData.length} }`);
  if (inputData.length === 0) {
    // Do this when CTRL-D is triggered
  } else {
    // Do this on EOF from other commands
    process.stdout.write('This important software is now closing\n');
  }
});
