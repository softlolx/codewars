// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

let arr = "assss";

function XO(str) {
  let newArr = str.toLowerCase().split("");
  console.log(newArr);
  let xArr = newArr.filter((item) => item == "x");
  console.log(xArr);

  let oArr = newArr.filter((item) => item == "o");
  console.log(oArr);
  console.log(xArr.length == oArr.length);
  return xArr.length == oArr.length;
}

XO(arr);
