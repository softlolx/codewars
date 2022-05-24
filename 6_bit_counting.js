let num = 233;

function countBits(n) {
  let result = n
    .toString(2)
    .split("")
    .filter((item) => item == 1).length;

  console.log(result);
}

countBits(num);
