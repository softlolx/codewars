const exmple = "12312312";

function maskify(cc) {
  arr = cc.split("");
  for (let i = 0; i < arr.length - 4; i++) {
    arr[i] = "#";
  }
  return arr.join("");
}

maskify(exmple);
