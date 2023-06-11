//        1
//       2 2
//      3   3
//     4     4
//    5       5
//   6         6
//    5       5
//     4     4
//      3   3
//       2 2
//        1

let n = 7;

for (let i = 1; i <= n; i++) {
  let run = "";
  for (let j = 1; j <= n - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1) {
      run += i;
    } else {
      run += " ";
    }
  }
  console.log(run);
}
for (let i = n - 1; i >= 1; i--) {
  let run = "";
  for (let j = 1; j <= n - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
    if (k === 1 || k === 2 * i - 1) {
      run += i;
    } else {
      run += " ";
    }
  }
  console.log(run);
}

for (let i = 1; i <= n; i++) {
  let run = "";
  for (let j = 1; j <= n - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= n - i; k++) {}
}
