/* eslint-disable prefer-arrow-callback */
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', function myConsole(data) {
  // Process input
  const input = data.toString().trim();

  // Output result to stdout'
  console.log(`Your names is: ${input}`);
  console.log('This important software is now closing');
  process.exit(0);
});
