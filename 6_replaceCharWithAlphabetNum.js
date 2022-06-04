const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

function alphabetPosition(text) {
  let arr = text.toLowerCase().match(/[a-z]/gi);
  console.log(arr);
  let result = arr.map((item) => alphabet.indexOf(item)).join(" ");
  console.log(result);
}

alphabetPosition("Happy new 11year");
