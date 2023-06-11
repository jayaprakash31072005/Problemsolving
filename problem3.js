//         1
//        2 2
//       3 3 3
//      4 4 4 4
//     5 5 5 5 5
//    6 6 6 6 6 6
//   7 7 7 7 7 7 7
//  8 8 8 8 8 8 8 8
// 9 9 9 9 9 9 9 9 9

let n = 10;
for (let i = 1; i <= n - 1; i++) {
  let run = " ";
  for (let j = 1; j <= n - i; j++) {
    run += " ";
  }
  for (let k = 1; k <= i; k++) run += i + " ";
  {
    console.log(run);
  }
}
