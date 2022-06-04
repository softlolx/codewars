function isIsogram(str) {
  console.log(str.length == new Set(str.toLowerCase().split("").size));
}

isIsogram("aGa");
