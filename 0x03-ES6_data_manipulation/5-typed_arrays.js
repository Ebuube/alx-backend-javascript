export default function createInt8TypedArray(length, position, value) {
  /*
   * crateInt8TypedArray - create a new ArrayBuffer with an Int8 value at a specific position
   * @length: number of items
   * @position: where to insert value
   * @value: value to inser
   * Return: the ArrayBuffer
   */
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);

  const int8view = new DataView(buffer);
  int8view.setInt8(position, value);

  return int8view;
}
