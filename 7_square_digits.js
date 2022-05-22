function squareDigits(num) {
  let squaredNum = "";
  num = String(num);
  console.log(typeof num);
  for (i = 0; i < num.length; i++) {
    squaredNum += num[i] * num[i];
  }
  console.log(squaredNum);

  return +squaredNum;
}

squareDigits(234);
