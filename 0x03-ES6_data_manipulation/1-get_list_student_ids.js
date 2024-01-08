export default function getListStudentIds(students) {
  // Get a list of ids
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map((student) => student.id);
}
