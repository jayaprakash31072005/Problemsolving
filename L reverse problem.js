let n = 3;
for (let i = 1; i <= n; i++) {
  let run = "";
  for (let j = 1; j <= n - i; j++) {
    run += "   ";
  }

  for (let k = 1; k <= i; k++) {
    run += i - k + "  ";
  }
  console.log(run);
}
