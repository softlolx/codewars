let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

function countPositivesSumNegatives(input) {
  let result = [];
  let pos = input.filter((item) => item > 0);
  console.log(pos);
  let neg = input.filter((item) => item < 0);
  let countPos = pos.length;
  console.log(countPos);
  let sumNeg = neg.reduce((sum, current) => sum + current, 0);

  result.push(countPos);
  result.push(sumNeg);
  return result;
}

countPositivesSumNegatives(testData);
