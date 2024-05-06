const { readDatabase } = require('../utils');

const dbName = process.argv.length > 2 ? process.argv[2] : '';
console.log(`dbName: ${dbName}`); // testing

class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(dbName)
      .then((data) => {
        const payload = [];
        payload.push('This is the list of our students');
        Object.keys(data).forEach((field) => {
          const students = data[field];
          if (Array.isArray(students)) {
            payload.push(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
          }
        });
        return response.status(200).send(Buffer.from(payload.join('\n')));
      })
      .catch((error) => {
        console.log(error);
        console.log(`getAllStudents (error): ${error}`); // testing
        return response.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    console.log(`major is: ${major}`); // test

    if (!major || (major !== 'CS' && major !== 'SWE')) {
      return response.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(dbName)
      .then((data) => {
        const studentsInMajor = data[major];
        const payload = `List: ${studentsInMajor.join(', ')}`;
        return response.status(200).send(Buffer.from(payload));
      })
      .catch((error) => {
        console.log(`getAllStudentsByMajor(error): ${error}`); // test
        return response.status(500).send('Cannot load the database');
      });
  }
}

module.exports = StudentsController;
