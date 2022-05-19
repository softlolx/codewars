let numbers = [1, 5.2, 4, 0, -1];

function sum() {
  let result = 0;
  numbers.forEach(function (item) {
    result += item;
  });
  return result;
}

let showResult = sum();
console.log(showResult);
