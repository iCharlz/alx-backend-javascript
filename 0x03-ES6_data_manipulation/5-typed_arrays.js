const createInt8TypedArray = (length, position, value) => {
  const buffers = new ArrayBuffer(length);
  const intArray = new Int8Array(buffers);
  if (position > intArray.length) throw new Error('Position outside range');
  intArray[position] = value;
  return new DataView(buffers);
};

export default createInt8TypedArray;
