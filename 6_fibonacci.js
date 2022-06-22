//числа фибоначчи по порядковому номеру

function fib(n) {
  if (n == 1) return 1;
  let arr = [1, 2];
  for (i = 1; i < n - 1; i++) {
    arr.push(arr[i] + arr[i - 1]);
  }
  return arr[arr.length - 1];
}

console.log(fib(50));
