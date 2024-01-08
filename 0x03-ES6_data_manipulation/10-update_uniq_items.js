export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  groceries.forEach((value, item, map) => {
    if (value === 1) {
      map.set(item, 100);
    }
  });

  return groceries;
}
