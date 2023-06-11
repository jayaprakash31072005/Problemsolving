let n = 8;
for (let i = 1; i <= n - 1; i++) {
  let stair = "  ";
  for (let j = 1; j <= n; j++) {
    if (j >= i && j <= n - i) {
      stair += i;
    } else {
      stair += " ";
    }
  }
  console.log(stair);
}
