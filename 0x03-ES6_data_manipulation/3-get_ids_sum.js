export default function getStudentIdsSum(students) {
  // Sum up all students ids
  if (!Array.isArray(students)) {
    return 0;
  }

  return students.reduce((sumIds, student) => sumIds + student.id, 0);
}
