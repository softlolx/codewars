const a = [1, 2, 3, 4, 5, 5, 6, 6, 7, 7];
const b = [1, 5, 7];

function arrayDiff(a, b) {
  return a.filter((item) => !b.includes(item));
}

console.log(arrayDiff(a, b));