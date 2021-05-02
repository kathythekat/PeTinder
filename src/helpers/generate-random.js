function generateRandom(arr) {
  let randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

function generateRandomPage() {
  return Math.floor(Math.random() * 100);
}

export { generateRandomPage, generateRandom };
