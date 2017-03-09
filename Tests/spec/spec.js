var pow = require('../app/js/common.js');

describe("Pow test", function() {
  it("should be 27", function() {
    var result = pow(3, 3);

    expect(result).toEqual(27);
  });
});

describe("Pow test", function() {
  it("should be 15625", function() {
    var result = pow(25, 3);

    expect(result).toEqual(15625);
  });
});

describe("Pow test", function() {
  it("should be 15625", function() {
    var result = pow(333, 333);

    expect(result).toEqual(Infinity);
  });
});
