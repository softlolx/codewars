let string = "Pig a latin is cool !";

function pigIt(str) {
  let result = str.split(" ").map((item) => {
    if (item == "!" || item == "," || item == ".") {
      return item;
    } else {
      return item.substr(1) + item[0] + "ay";
    }
  });

  console.log(result.join(" "));
  return result;
}

pigIt(string);

// console.log(shortArr);
// console.log(shortArr.join(" "));
// let shortArr = ayArr.map((item) => {
//   if (item.length > 1) {
//     item.slice(1, item.length);
//   }
// });
