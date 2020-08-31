const { duplCountArray } = require("./DuplCountArray");

describe("Count distinct duplicated characteres", () => {
  it("no cvalues", () => {
    const input = [];
    const expected = 0;

    expect(duplCountArray(input)).toEqual(expected);
  });

  it("[1, 2, 3]", () => {
    const input = [1, 2, 3];
    const expected = 0;

    expect(duplCountArray(input)).toEqual(expected);
  });

  it("[3, 2, 1, 3]", () => {
    const input = [3, 2, 1, 3];
    const expected = 1;

    expect(duplCountArray(input)).toEqual(expected);
  });

  it("[3, 2, 3, 1, 3]", () => {
    const input = [3, 2, 3, 1, 3];
    const expected = 1;

    expect(duplCountArray(input)).toEqual(expected);
  });

  it("[3, true, false, true, 1, 3]", () => {
    const input = [3, true, false, true, 1, 3];
    const expected = 2;

    expect(duplCountArray(input)).toEqual(expected);
  });

  it("[3, true, false, 'Aba', true, 1, 3]", () => {
    const input = [3, true, false, "Aba", true, 1, 3];
    const expected = 2;

    expect(duplCountArray(input)).toEqual(expected);
  });

  it("['Aba', 3, true, false, 'Aba', true, 1, 3]", () => {
    const input = ["Aba", 3, true, false, "Aba", true, 1, 3];
    const expected = 3;

    expect(duplCountArray(input)).toEqual(expected);
  });

  it("['Aba', 3, true, 'b', false, 'Aba', true, 1, 3]", () => {
    const input = ["Aba", 3, true, "b", false, "Aba", true, 1, 3];
    const expected = 3;

    expect(duplCountArray(input)).toEqual(expected);
  });
});
