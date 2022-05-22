let str = "bitcoin take over the world maybe who knows perhaps";

function findShort(s) {
  let arr = s
    .split(" ")
    .map((item) => item.length)
    .sort((a, b) => a - b);
  return arr[0];
}
findShort(str);
