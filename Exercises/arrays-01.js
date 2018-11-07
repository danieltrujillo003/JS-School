let arr = [];
let i;
for (i = 0; i < 10; i += 1) {
  arr.push(Math.floor(Math.random() * 20));
}
let arrToString = arr.join(", ");
console.log(`The array before sorting it: [${arrToString}]`);
arr.sort((a, b) => a - b);
arrToString = arr.join(", ");
console.log(`The array after sorting it: [${arrToString}]`);
