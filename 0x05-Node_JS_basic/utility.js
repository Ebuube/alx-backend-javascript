/* utitilty functions */
const fs = require('fs');

/**
 * countStudents - Count the number of student per field
 * @path: name of database
 * description: It reads the database asynchronously
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    const students = {};
    let payload = '';
    // Read the CSV database file asynchronously
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        // Processing data
        const lines = data.split('\n').splice(1)
          .filter((line) => line.trim() !== '');
        // Summary
        payload += 'This is the list of our students';
        payload += `\nNumber of students: ${lines.length}`;
        // Collate members by field
        lines.forEach((line) => {
          const entry = line.split(',');
          const firstName = entry[0];
          const field = entry[entry.length - 1];

          if (Object.prototype.hasOwnProperty.call(students, field)) {
            students[field].push(firstName);
          } else {
            students[field] = [];
            students[field].push(firstName);
          }
        });
        // Display the students
        for (const field in students) {
          if (Object.prototype.hasOwnProperty.call(students, field)) {
            const size = students[field].length;
            const members = students[field].join(', ');
            payload += `\nNumber of students in ${field}: ${size}. List: ${members}`;
          }
        }
      }
      // Resolve the Promise with the result
      resolve(payload);
    });
  });
}

module.exports = countStudents;
