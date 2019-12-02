import assert from 'assert';

import arrayFlat from '../arrayFlat';

describe('Passing array null', function () {
  var input = null;

  it('should run without errors', function () {
    assert.deepStrictEqual(arrayFlat(input), []);
  });

  it('should have length 0', function () {
    assert.deepStrictEqual(arrayFlat(input).length, 0);
  });
});


describe('Flat simple array', function () {
  var input = [1];

  it('should flat all array', function () {
    assert.deepStrictEqual(arrayFlat(input), [1]);
  });

  it('should have length 1', function () {
    assert.deepStrictEqual(arrayFlat(input).length, 1);
  });
});

describe('Flat array with depth 1', function () {
  var input = [1, [2, 3]];

  it('should flat all array', function () {
    assert.deepStrictEqual(arrayFlat(input), [1, 2, 3]);
  });

  it('should have length 3', function () {
    assert.deepStrictEqual(arrayFlat(input).length, 3);
  });
})

describe('Flat array with depth 2', function () {
  var input = [1, [2, [3, 4], 5], 6];

  it('should flat all array', function () {
    assert.deepStrictEqual(arrayFlat(input), [1, 2, 3, 4, 5, 6]);
  });

  it('should have length 6', function () {
    assert.deepStrictEqual(arrayFlat(input).length, 6);
  });
})

describe('Flat array very long', function () {
  var input = [1, [[2, [1, 2, [1, 1]]], 3, [4, [5, [[4, [5, 6]]], [[4, [5, [[4, [5, 6]]], 6]]], [[4, [5, 6]]], 6]]], [7, 8], [9]];

  it('should flat all array', function () {
    assert.deepStrictEqual(arrayFlat(input), [
      1, 2, 1, 2, 1, 1, 3, 4, 5, 4, 5, 6, 4, 5, 4, 5, 6, 6, 4, 5, 6, 6, 7, 8, 9
    ]);
  });

  it('should have length 25', function () {
    assert.deepStrictEqual(arrayFlat(input).length, 25);
  });
});
