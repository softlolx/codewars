// function calc(x) {
//   const total1 = x

//     .split("")
//     .map((item) => item.charCodeAt(0))
//     .join("")
//     .split("");

//   const total2 = total1.map((item) => {
//     if (item == "7") {
//       return (item = "1");
//     } else {
//       return item;
//     }
//   });

//   return total1.reduce((a, b) => +a + +b) - total2.reduce((a, b) => +a + +b);
// }

function calc(x) {
  const total1 = x
    .split("")
    .map((item) => item.charCodeAt(0))
    .join("");
  return total1.split("").filter((item) => item == "7").length * 6;
}

console.log(calc("abcdef"));
