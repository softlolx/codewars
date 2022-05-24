let n = 39;

function persistence(num) {
  let counter = 0;
  while (String(num).length > 1) {
    num = String(num)
      .split("")
      .map((item) => {
        return Number(item);
      })
      .reduce((acc, i) => acc * i);
    counter++;
  }

  return counter;
}

persistence(n);

// do {
//   num = String(num)
//     .split("")
//     .map((item) => {
//       return Number(item);
//     })
//     .reduce((acc, i) => acc * i);
//   counter++;
// } while (String(num).length > 1);
// console.log(counter);
