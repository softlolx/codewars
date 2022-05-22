let str = "middle";

function getMiddle(s) {
  if (s.length % 2 == 1) {
    console.log(s[(s.length - 1) / 2]);
    return s[(s.length - 1) / 2];
  } else {
    console.log(s[s.length / 2 - 1] + s[s.length / 2]);
    return s[s.length / 2 - 1] + s[s.length / 2];
  }
}

getMiddle(str);
