const numbers = [5, 8, 12, 19, 22];

function sumTwoSmallestNumbers() {
  console.log(
    numbers.sort((a, b) => a - b)[0] + numbers.sort((a, b) => a - b)[1]
  );
}

sumTwoSmallestNumbers();
