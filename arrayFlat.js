import baseArrayFlat from './_baseArrayFlat';

function flatten(arr) {
  const length = arr == null ? 0 : arr.length;
  return length ? baseArrayFlat(arr) : [];
} 

export default flatten;
