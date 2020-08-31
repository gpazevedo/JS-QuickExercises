const { Module } = require("module");

function duplCountArray(input) {
  const { duplicated } = input.reduce(
    (acc, primitive) => {
      const { present, duplicated } = acc;

      if (present.has(primitive)) {
        duplicated.add(primitive);
      } else {
        present.add(primitive);
      }
      return { present, duplicated };
    },
    { present: new Set(), duplicated: new Set() }
  );

  return duplicated.size;
}
module.exports = { duplCountArray };
