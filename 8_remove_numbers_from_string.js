function stringClean(s) {
  let result = "";
  for (i = 0; i < s.length; i++) {
    if (isNaN(s[i]) || s[i] == " ") {
      result += s[i];
    }
  }
  return result;
}

let showResult = stringClean("a1sd a1 d1d#!d d1sdsds  dsdsds");
console.log(showResult);
