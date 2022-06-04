function getSum(a, b) {
  if (a == b) {
    return a;
  } else if (a < b) {
    for (i = a; i <= b; i++) {
      a += i;
    }
    return a;
  } else if (a > b) {
    for (i = b; i <= a; i++) {
      b += i;
    }
    return b;
  }
}

getSum(0, 5);
