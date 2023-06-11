// Given an array of length n and k (k < n) find the maximum sum of k consecutive numbers.

let a = [4, 5, 10, 11, 1];
let k = 3;
// // The maximum is 26.

let x = 19;
// let y = x;
// for (let i = 0; i < k; i++) {
//   x += a[i];
// }
// console.log(x);
let y = x;
for (let i = k; i < a.length; i++) {
  x = x - a[i - k] + a[i];
  // console.log(x);=
  if (x > y) {
    y = x;
  }
}
console.log(y);
