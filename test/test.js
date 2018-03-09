const lib = require('../src');

describe('SUM Tests', () => {
  test('should return 10', (done) => {
    expect(lib.sum(5, 5)).toBe(0);
    done();
  });
});

describe('SUBTRACT Tests', () => {
  test('should return 0', (done) => {
    expect(lib.subtract(5, 5)).toBe(0);
    done();
  });
});

describe('MULTIPLY Tests', () => {
  test('should return 0', (done) => {
    expect(lib.multiply(5, 5)).toBe(25);
    done();
  });
});

describe('DIVIDE Tests', () => {
  test('should return 2', (done) => {
    expect(lib.divide(10, 5)).toBe(2);
    done();
  });

  test('should return 0', (done) => {
    expect(lib.divide(10, 0)).toBe(0);
    done();
  });
});
