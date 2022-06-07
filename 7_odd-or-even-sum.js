function oddOrEven(array) {
  return array.reduce((acc, i) => acc + i) % 2 == 0 ? "odd" : "even";
}

console.log(oddOrEven([0, 1, 4]));
