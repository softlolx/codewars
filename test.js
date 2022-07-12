// let month = [];

let week = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];

// for (let i = 0; i < 31; i++) {
//   month.push(i);
// }

// console.log(month);

function weekday(day) {
  if (day > 0 && day < 32) {
    return week[day % 7];
  } else {
    return "bitch, please, enter a number between 1 and 31.";
  }
}

console.log(weekday(1));
