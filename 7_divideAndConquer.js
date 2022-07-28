// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

const test = [9, 3, "7", "3"];

function divCon(x) {
  let i = 0;
  let n = 0;
  x.forEach((item) => {
    if (typeof item === "string") {
      i += +item;
    } else {
      n += item;
    }
  });
  return n - i;
}

console.log(divCon(test));
