export default function appendToEachArrayValue(array, appendString) {
  const arr2 = [];
  for (let idx of array) {
    idx = appendString + idx;
    arr2.push(idx);
  }

  return arr2;
}
