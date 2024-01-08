export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  // Throw an error when a particular endpoint is more than four times
  if (!weakMap.has(endpoint)) {
    // First query
    weakMap.set(endpoint, 1);
    return;
  }

  const attempts = weakMap.get(endpoint);
  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, attempts + 1);
  }
}
