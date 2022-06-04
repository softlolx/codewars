function order(words) {
  let result = [];

  words.split(" ").forEach((element) => {
    result[+element.match(/[1-9]/gi) - 1] = element;
  });

  console.log(result.join(" "));
}

order("is2 Thi1s T4est 3a");

// result[+words.split(" ")[0].match(/[1-9]/gi) - 1] = arr[0];
