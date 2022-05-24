let num = 456;

function digital_root(n) {
  do {
    n = String(n)
      .split("")
      .map((item) => {
        return Number(item);
      })
      .reduce((acc, i) => acc + i);
  } while (n > 9);
  console.log(n);
}

digital_root(num);

// let num = 493193;

// function digital_root(n) {
//   let arr = String(n)
//     .split("")
//     .map((item) => {
//       return Number(item);
//     });
//   let result = 0;

//   result = arr.reduce((acc, i) => acc + i);

//   do {
//     result = String(result)
//       .split("")
//       .map((item) => {
//         return Number(item);
//       })
//       .reduce((acc, i) => acc + i);
//   } while (result > 9);
//   console.log(result);
// }

// digital_root(num);
