let n = 4;

let row = " ";
for (let i = 1; i <= n; i++) {
  row += i + " ";
}
console.log(row);

let out = " ";
for (let i = n - 2; i <= n - 1; i++) {
  out += i + "     ";
}
console.log(out);

let rev = " ";
for (let i = n - 1; i >= n - 2; i--) {
  rev += i + "     ";
}
console.log(rev);
let run = " ";
for (let i = n; i >= 1; i--) {
  run += i + " ";
}
