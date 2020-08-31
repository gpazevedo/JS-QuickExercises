const { duplicateCountRegExp } = require("./DuplCountRegExp");

describe("Count distinct duplicated characteres", () => {
  it("no characters", () => {
    const input = "";
    const expected = 0;

    expect(duplicateCountRegExp(input)).toEqual(expected);
  });

  it("abcde", () => {
    const input = "abcde";
    const expected = 0;

    expect(duplicateCountRegExp(input)).toEqual(expected);
  });

  it("aabbcde", () => {
    const input = "aabbcde";
    const expected = 2;

    expect(duplicateCountRegExp(input)).toEqual(expected);
  });

  it("aabBcde", () => {
    const input = "aabBcde";
    const expected = 2;

    expect(duplicateCountRegExp(input)).toEqual(expected);
  });

  it("indivisibility", () => {
    const input = "indivisibility";
    const expected = 1;

    expect(duplicateCountRegExp(input)).toEqual(expected);
  });

  it("Indivisibilities", () => {
    const input = "Indivisibilities";
    const expected = 2;

    expect(duplicateCountRegExp(input)).toEqual(expected);
  });

  it("aA11", () => {
    const input = "aA11";
    const expected = 2;

    expect(duplicateCountRegExp(input)).toEqual(expected);
  });

  it("ABBA", () => {
    const input = "ABBA";
    const expected = 2;

    expect(duplicateCountRegExp(input)).toEqual(expected);
  });
});
