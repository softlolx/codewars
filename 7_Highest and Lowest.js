let test = "1 2 3 4 5";

function highAndLow(numbers) {
  const arr = numbers.split(" ");
  arr.sort((a, b) => b - a);

  return arr[0] + " " + arr[arr.length - 1];
}

highAndLow(test);
console.log(highAndLow(test));
