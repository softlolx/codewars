let string = "Hey fellow warriors";

function spinWords(string) {
  let arr = string.split(" ");
  let newArr = [];
  console.log(arr);
  arr.forEach((item) => {
    if (item.length >= 5) {
      newArr.push(item.split("").reverse().join(""));
    } else {
      newArr.push(item);
    }
  });
  console.log(newArr.join(" "));
  return newArr.join(" ");
}

spinWords(string);

// let newArr = arr.map(function (item) {
//   if (item.length >= 5) {
//     item.split("").reverse().join("");
//   }
// });
