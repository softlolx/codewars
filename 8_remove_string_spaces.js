//  Remove the spaces from the string, then return the resultant string.

function noSpace(x) {
  let result = "";
  for (i = 0; i <= x.length; i++) {
    if (x.charAt(i) !== " ") {
      result += x.charAt(i);
    }
  }
  return result;
}

let showResult = noSpace("asd a ddd dsds!ds  dsdsds");
console.log(showResult);
