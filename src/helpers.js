function generateRandom(arr) {
  return Math.floor(Math.random() * arr.length);
}

function avoidDuplicates(arr) {
  let index = generateRandom(arr);
  let seen = new Set();
  while (arr.length) {
    if (!seen.has(index)) {
      seen.add(index);
      console.log(index);
    }
  }
}

export default generateRandom;
