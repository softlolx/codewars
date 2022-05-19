// Find the sum of all multiples of n below m

function sumMul(n, m) {
  if (m > n) {
    let result = 0;
    for (i = n; i <= m; i++) {
      if (i % n == 0) {
        result += i;
      }
    }
    return result;
  } else {
    return "INVALID";
  }
}

let showResult = sumMul(2, 9);
console.log(showResult);
