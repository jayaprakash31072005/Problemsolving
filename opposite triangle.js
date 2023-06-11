let n = 4;
let run = " ";
for (let i = n; i >= 1; i--) {
  run = "";
  for (let j = i; j >= 1; j--) {
    run += j + " ";
  }
  console.log(run);
}