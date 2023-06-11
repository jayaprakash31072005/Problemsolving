let n = 5;
let global = " ";
for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= n; j++) {
    global += i + "  ";
  }
}

console.log(global);
