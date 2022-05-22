let string = "How can mirrors be real if our eyes aren't real";

function toJadenCase(str) {
  let arr = str.split(" ");
  let upArr = arr.map((item) => item[0].toUpperCase() + item.slice(1));
  let result = upArr.join(" ");
  console.log(result);
}

toJadenCase(string);
