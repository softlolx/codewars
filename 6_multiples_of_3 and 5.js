let num = 100000000;

function hardSolution(number) {
  if (number < 0) return 0;
  let arr = [];
  for (let i = 0; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }

  let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
}

hardSolution(num);

function lightSolution(number) {
  let sum = 0;
  for (let i = 3; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}

lightSolution(num);
