const s1 = "yestheyarehere";
const s2 = "aretheyhere";

function longest(s1, s2) {
  return Array.from(new Set(s1 + s2))
    .sort()
    .join("");
}

console.log(longest(s1, s2));
