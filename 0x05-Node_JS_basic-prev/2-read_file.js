// Read a database synchronously
const fs = require('fs');
const csv = require('csv-parser');

/**
 * Read a CSV file synchronously and computes the result
 * @fileName: The name of the file to read
 */
function countStudents(fileName) {
  console.log('In countStudents');  // test
  const students = [];
  try {
    // Parse the CSV data using csv-parser
    console.log('Trying to parse database');  // test

    fs.createReadStream(fileName, 'utf-8')
      .pipe(csv({ header: true}))
      .on('data', (row) => {
        console.log(`row: ${row['key']}: ${row['value']}`); // test
        students.push(row)
      })
      .on('end', () => {
        console.log('Done');
      });
    console.log(csvData); // test
    console.log(`Number of records: ${students.length}`);
  } catch (error) {
    // File not found
    if (error.code === 'ENOENT') {
      throw new Error('Cannot load the database');
    }
  }

}

module.exports = countStudents;
