let n = 3;
let output = 1;
for (let i = 1; i <= n; i++) {
  let run = "";
  for (let j = 1; j <= n - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    run += output++;
  }
  console.log(run);
}
