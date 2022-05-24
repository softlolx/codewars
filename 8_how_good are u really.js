let scores = [100, 40, 34, 57, 29, 72, 57, 88];

function betterThanAverage(classPoints, yourPoints) {
  let avg = classPoints.reduce((acc, i) => acc + i) / classPoints.length;
  if (avg < yourPoints) {
    return true;
  } else {
    return false;
  }
}

betterThanAverage(scores, 75);
