let n = 5;
for (let i = 1; i <= n - 1; i++) {
  let row = "          ";
  for (let j = 1; j <= n - i; j++) {
    row += "  ";
  }
  for (let k = 1; k <= i; k++) {
    row += k + " ";
  }
  console.log(row);
}
