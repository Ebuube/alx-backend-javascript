export default function getStudentsByLocation(students, city) {
  // Get a list of studenst by location
  // students: An array of students
  // city: A string representing the city to search
  if (!Array.isArray(students)) {
    return [];
  }

  return students.filter((student) => student.location === city);
}
