arr = [4, 3, 9, 7, 2, 1];

function squareOrSquareRoot(array) {
  let result = array.map((item) => {
    if (Math.sqrt(item) % 1 == 0) {
      return Math.sqrt(item);
    } else {
      return item * item;
    }
  });

  console.log(result);
  return result;
}

squareOrSquareRoot(arr);
