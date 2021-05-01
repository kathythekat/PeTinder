function generateRandom(arr) {
  let randomIdx = Math.floor(Math.random() * arr.length);
  return arr[randomIdx];
}

// function avoidDuplicates(arr) {
//   let dog = generateRandom(arr);
//   let alreadySeen = new Set();
//   let i = 0;
//   while (i < arr.length) {
//     if (!alreadySeen.has(dog)) {
//       alreadySeen.add(dog);
//       console.log(alreadySeen);
//     }
//   }
// }

export default generateRandom;
