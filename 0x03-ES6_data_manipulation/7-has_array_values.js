export default function hasValuesFromArray(set, array) {
  // Return true if all the elements in the array exist within the set
  if ((!Array.isArray(array)) || !(set instanceof Set)) {
    return false;
  }
  return array.every((element) => set.has(element));
}
