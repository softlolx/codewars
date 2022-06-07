function accum(s) {
  return (result = s
    .split("")
    .map((item, index) => {
      return item.toUpperCase() + item.toLowerCase().repeat(index);
    })
    .join("-"));
}
console.log(accum("RqAEzty"));
