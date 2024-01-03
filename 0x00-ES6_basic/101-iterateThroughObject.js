export default function iterateThroughObject(reportWithIterator) {
  const sep = ' | ';
  let staff = '';
  const allStaff = [...reportWithIterator];

  for (let x = 0; x < allStaff.length; x += 1) {
    if (x === 0) {
      staff = allStaff[x];
    } else if (x < allStaff.length) {
      staff += sep + allStaff[x];
    }
  }
  return staff;
}
