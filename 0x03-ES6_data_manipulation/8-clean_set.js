export default function cleanSet(set, startString) {
  // Return a string of all the set values that start with a specific string
  if (!(set instanceof Set) || (typeof startString !== 'string') || startString === '') {
    return '';
  }

  const filtered = Array.from(set)
    .filter((element) => {
      if (typeof element !== 'string') {
        return false;
      }
      return element.startsWith(startString);
    })
    .map((element) => element.replace(startString, ''))
    .reduce((sum, element) => sum.concat('-', element));
  return filtered;
}
