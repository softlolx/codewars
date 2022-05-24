let arr = [2, 4, 0, 100, 4, 11, 2602, 36];

function findOutlier(integers) {
  let even = integers.filter((item) => item % 2 == 0);
  if (even.length == 1) {
    console.log(even[0]);
    return even[0];
  } else {
    console.log(integers.filter((item) => item % 2 !== 0)[0]);
    return integers.filter((item) => item % 2 !== 0)[0];
  }
}

findOutlier(arr);
