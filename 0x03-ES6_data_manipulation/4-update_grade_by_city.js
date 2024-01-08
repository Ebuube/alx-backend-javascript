/* eslint-disable no-param-reassign */
export default function updateStudentGradeByCityi(students, city, newGrades) {
  // Return an array of students for a specific city with their new grade
  // students: Array of students eg. [{ id: 1, firstName: 'Guillaume', location: 'San Francisco' }]
  // city: A string name for location: eg. 'San Francisco'
  // newGrades: An array of objects with this format: { studentId: 31, grade: 78 }
  if (!Array.isArray(students)) {
    return [];
  }

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const record = newGrades.find((record) => record.studentId === student.id);
      if (record) {
        student.grade = record.grade;
      } else {
        student.grade = 'N/A';
      }

      return student;
    });
}
