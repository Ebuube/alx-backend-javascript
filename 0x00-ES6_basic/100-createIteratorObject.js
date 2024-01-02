export default function createIteratorObject(report) {
  const arr = [];
  for (const department of Object.values(report.allEmployees)) {
    arr.push(...department);
  }

  return arr;
}
