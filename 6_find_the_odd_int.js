const arr = [5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10];

function findOdd(A) {
  const obj = Object.fromEntries(
    A.map((item) => [item, A.filter((element) => element == item)])
  );
  let result = Object.values(obj).filter((item) => item.length % 2 !== 0)[0][0];
  console.log(result);
  return result;
}

findOdd(arr);
