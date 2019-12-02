function baseArrayFlat(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      arr.splice.apply(arr, [i, 1].concat(arr[i]));
      i--;
    }
  }

  return arr;
}

export default baseArrayFlat;
