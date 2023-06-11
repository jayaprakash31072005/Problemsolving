// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) row += " ";
//   {
//     for (let k = 1; k <= i; k++) row += i + " ";
//     {
//     }

//     console.log(row);
//   }
// }

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) row += " ";
//   {
//     for (let k = 1; k <= i; k++) row += i + " ";
//     {
//     }

//     console.log(row);
//   }
// }

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += i + " ";
//   }
//   console.log(row);
// }

// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }

// for (let i = n - 1; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= n - i; j++) {
//     row += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }

// let n = 15;

// for (let i = 1; i <= n; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("Superstar Rajnikanth");
//   } else if (i % 3 == 0) {
//     console.log("Superstar");
//   } else if (i % 5 == 0) {
//     console.log("Rajnikanth");
//   } else {
//     console.log(i);
//   }
// }
// let n = 4;
// let output = "";
// for (let i = 1; i <= n; i++) {
//   output += i + " ";
//   console.log(output);
// }
// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let output = "";
//   for (let j = 1; j <= i; j++) {
//     output += j + "  ";
//   }
//   console.log(output);
// }
// let n = 10;
// for (let i = 1; i <= n; i++) {
//   let global = "    ";
//   for (let j = 1; j <= i; j++) {
//     global += i + "   ";
//   }
//   console.log("sachin");
// }

// let n = 7;

// for (let i = 1; i <= n - 1; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += k + " ";
//   {
//     console.log(run);
//   }
// }

// for (let i = n - 1; i >= 1; i--) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += k + " ";
//   {
//     console.log(run);
//   }
// }
// let n = 10;
// let global = " ";
// for (let i = n; i >= 0; i--) {
//   global += i + " ";
// }
// console.log(global);

// let n = 5;
// let global = " ";
// for (let i = n; i >= 1; i--) {
//   for (let j = 1; j <= n; j++) {
//     global += i + "  ";
//   }
// }

// console.log(global);

// let n = 3;
// for (let i = n - 1; i >= 1; i--) {
//   let global = " ";
//   for (let j = 1; j <= n - i; j++) {
//     for (let k = 1; k <= i; k++) {
//       global += i - k + 1 + " ";
//     }
//     console.log(global);
//   }
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += "   ";
//   }

//   for (let k = 1; k <= i; k++) {
//     run += i - k + "  ";
//   }
//   console.log(run);
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += k + " ";
//   {
//     console.log(run);
//   }
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let run = " ";
//   for (let j = 1; j <= n; j++) {
//     for (let k = 1; k <= n - i; k++) {
//       run += i - k + 1 + "   ";
//     }
//   }
//   console.log(run);
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     run += k + " ";
//   }
//   console.log(run);
// }

// let n = 2;
// for (let i = 1; i <= n; i++) {
//   console.log("1");
// }
// for (let i = 1; i <= n; i++) {
//   let global = "";
//   for (let j = 1; j <= 2 + n - i + 2; j++) {
//     global += i + " ";
//   }
//   console.log(global);
// }

// for (let i = 1; i <= n; i++) {
//   console.log("1");
// }

// let n = 3;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += k + " ";
//   {
//     console.log(run);
//   }
// }

// let n = 3;
// // Repeat n times
// for (let i = 1; i <= n; i++) {
//   //spaces + sequence of numbers
//   console.log(getSpaces(n) + getNumSequence(i));
// }

// //console.log( getSpaces(3) + getNumSequence(1));

// //console.log( getSpaces(2) + getNumSequence(2));

// //console.log( getSpaces(1) + getNumSequence(3));

// function getSpaces(n) {
//   let str = "";
//   for (let i = 1; i <= n; i++) {
//     str = str + " ";
//   }
//   return str;
// }

// function getNumSequence(n) {
//   let numseq_str = "";
//   for (let i = 1; i <= n; i++) {
//     numseq_str = numseq_str + i + " ";
//   }
//   return numseq_str;
// }

//Reverse half diamond
//Repeat 2 times
// spaces + sequence in reverse of numbers

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += "   ";
//   }

//   for (let k = 1; k <= i; k++) {
//     run += i - k + "  ";
//   }
//   console.log(run);
// }

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   let run = " ";
//   for (let j = 1; j <= n; j++) {
//     run += i + " ";
//   }

//   console.log(run);
// }

// let n = 4;

// for (let i = 1; i <= n; i++) {
//   let run = " ";
//   for (let j = 1; j <= i; j++) {
//     run += j + " ";
//   }

//   console.log(run);
// }

// for (let i = 1; i <= n - 1; i++) {
//   let row = "  ";
//   for (let j = 1; j <= n - i; j++) {
//     row += "  ";
//   }
//   for (let k = i; k >= 1; k--) {
//     row += k + " ";
//   }
//   console.log(row);
// }

// let n = 5;
// for (let i = 1; i <= n - 1; i++) {
//   let row = "          ";
//   for (let j = 1; j <= n - i; j++) {
//     row += "  ";
//   }
//   for (let k = 1; k <= i; k++) {
//     row += k + " ";
//   }
//   console.log(row);
// }

// for (let i = 0; i < n; i++) {
//   let run = " ";
//   for (let j = 1; j < n - i; j++) {
//     run += "";
//   }
//   for (let k = 1; (k = i); k++) {
//     run += i;
//   }
//   console.log(run);
// }

// let n = 4;

// function num(n) {
//   let run = " ";
//   for (let i = 1; i <= n; i++) {
//     console.log(run + i);
//     run += "   ";
//   }
// }

// function seq(n) {
//   let row = " ";
//   for (let i = n - 1; i >= 1; i--) {
//     console.log(row + i);

//     row += "  ";
//   }
// }
//let n = 6;
// let run = "";
// for (let i = n; i >= 0; i--) {
//   run += i + " ";
// }

// console.log(run);

// for (let i = 1; i <= 7; i++) {
//   let stair = "  ";
//   for (let j = 1; j <= 8; j++) {
//     if (j >= i && j <= 8 - i) {
//       stair += i;
//     } else {
//       stair += " ";
//     }
//   }
//   console.log(stair);
// }

// let n = 5;
// for (let i = 1; i <= n; i++) {
//   console.log(
//     tot(i) + numSpaces(n - i + 1) + numSpaces(n - i) + rightSpaces(i)
//   );
// }
// for (let i = n - 1; i < n; i++) {
//   console.log(leftnumber(i + 1) + rightnumber(i));
// }
// // function methods
// // spaces
// function numSpaces(n) {
//   let run = "";
//   for (let i = 1; i <= n; i++) {
//     run += "  ";
//   }
//   return run;
// }
// // left staircase
// function tot(n) {
//   let run = "";
//   for (let i = 1; i < n; i++) {
//     run += i + " ";
//   }
//   return run;
// }
// function rightSpaces(n) {
//   let run = "";
//   for (let i = n - 1; i >= 1; i--) {
//     run += i + " ";
//   }
//   return run;
// }
// function leftnumber(n) {
//   let run = "";
//   for (let i = 1; i <= n; i++) {
//     run += i + " ";
//   }
//   return run;
// }
// function rightnumber(n) {
//   let run = "";
//   for (let i = n; i >= 1; i--) {
//     run += i + " ";
//   }
//   return run;
// }

// let n = 4;
// let run = " ";
// for (let i = n; i >= 1; i--) {
//   run = "";
//   for (let j = i; j >= 1; j--) {
//     run += j + " ";
//   }
//   console.log(run);
// }

// let n = 4;
// for (let i = 1; i <= n; ) {
//   let run = " ";
//   for (let j = 1; j <= n; ) {
//     run += j + " ";
//   }
//   console.log(run);
// }

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += i + " ";
//   {
//     console.log(run);
//   }
// }

// for (let i = n - 1; i >= 1; i--) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += i + " ";
//   {
//     console.log(run);
//   }
// }

// let n = 10;
// for (let i = 1; i <= n - 1; i++) {
//   let run = " ";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= i; k++) run += i + " ";
//   {
//     console.log(run);
//   }
// }

// let n = 10;

// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1) {
//       run += i;
//     } else {
//       run += " ";
//     }
//   }
//   console.log(run);
// }
// for (let i = n - 1; i >= 1; i--) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     if (k === 1 || k === 2 * i - 1) {
//       run += i;
//     } else {
//       run += " ";
//     }
//   }
//   console.log(run);
// }

// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= n - i; k++) {}
// }
// let n = 3;
// let output = 1;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     run += output++;
//   }
//   console.log(run);
// }

// let n = 4;

// let row = " ";
// for (let i = 1; i <= n; i++) {
//   row += i + " ";
// }
// console.log(row);

// let out = " ";
// for (let i = n - 2; i <= n - 1; i++) {
//   out += i + "     ";
// }
// console.log(out);

// let rev = " ";
// for (let i = n - 1; i >= n - 2; i--) {
//   rev += i + "     ";
// }
// console.log(rev);
// let run = " ";
// for (let i = n; i >= 1; i--) {
//   run += i + " ";
// }
// console.log(run);
// JSON represention
// For students database
// name, age,stipend marks for 3 subjects, maths, physics and chemistry.
// 0. Given a name find it in the array of students.
// 1. a. Find the eldest student, it should print the name of the student,
//	b. find the student who earns the least stipend

// let a = [
//   {
//     name: "Kishore",
//     age: 19,
//     stipend: 1000,
//     marks: { maths: 50, physics: 79, chemistry: 80 },
//   },
//   {
//     name: "Razzak",
//     age: 18,
//     stipend: 10000,
//     marks: { maths: 80, physics: 75, chemistry: 70 },
//   },
//   {
//     name: "Ajmal",
//     age: 18,
//     stipend: 10000,
//     marks: { maths: 35, physics: 45, chemistry: 50 },
//   },
//   {
//     name: "Aishwarya",
//     age: 21,
//     stipend: 10000,
//     marks: { maths: 65, physics: 80, chemistry: 85 },
//   },
// ];

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i].name);
// }

// let x = a[0].age;
// for (let i = 0; i < a.length; i++) {
//   if (x < a[i].age) {
//     x = a[i].age;
//     console.log(a[i].name);
//   }
// }

// let y = a[0].stipend;
// for (let i = 0; i < a.length; i++) {
//   if (y >= a[i].stipend) {
//     y = a[i].stipend;
//     console.log(a[i].name);
//   }
// }

// let s = a[0].physics;
// for (let i = 0; i < a.length; i++) {
//   if (s < a[i].physics) {
//     s = a[i].physics;
//     console.log(a[i].physics);
//   }
// }

// let a = [4, 5, 10, 11, 1];
// let k = 3;

// let sum = 0;
// for (let i = 0; i < k; i++) {
//   sum += a[i];
// }

// let maxSum = sum;
// for (let i = k; i < a.length; i++) {
//   sum = sum - a[i - k] + a[i];
//   if (sum > maxSum) {
//     maxSum = sum;
//   }
// }

// console.log(maxSum); // output: 26

// console.log(sum); // output: 14

// const studentsWithPhysicsGreaterThan70 = a.filter((student) => {
//   return student.marks.physics > 70;
// });

// console.log(studentsWithPhysicsGreaterThan70);

// return x;

// let i = 2;
// console.log(students_db_array[i].name === "Razzak");

//3. Given an array, print the sum of all even numbers in the array
// let a = [4, 3, 17, 10, 11];
// // it should print 14
// let x = 0;
// for (let i = 0; i < a.length; i++) {
//   if (a[i] % 2 === 0) {
//     x += a[i];
//   }
// }
// console.log(x);

// Given an array of length n and k (k < n) find the maximum sum of k consecutive numbers.

// let a = [4, 5, 10, 11, 1];
// let k = 3;
// // // The maximum is 26.

// let x = 19;
// // let y = x;
// // for (let i = 0; i < k; i++) {
// //   x += a[i];
// // }
// // console.log(x);
// let y = x;
// for (let i = k; i < a.length; i++) {
//   x = x - a[i - k] + a[i];
//   // console.log(x);=
//   if (x > y) {
//     y = x;
//   }
// }
// console.log(y);

// let a = [4, 5, 10, 11, 1];
// let k = 3;
// let maxSum = 0;

// for (let i = 0; i < a.length - k + 1; i++) {
//   //012

//   let sum = 0;
//   for (let j = i; j < i + k; j++) {
//     //012
//     //123
//     sum += a[j];
//   }
//   if (sum > maxSum) {
//     maxSum = sum;
//   }
// }

// console.log(maxSum);

// Given the length and breadth , let l = 10; let b = 5; your code should print "Area of the rectangle is 50".

// let l = 10;
// let b = 5;

// let area = "Area of the rectangle is" + l * b;
// console.log(area);

// Given 2 numbers it should print if they are equal or not equal,
// let a = 10;
// let b = 20;
// // It should either a is equal to b or a is NOT equal to b

// if ((a = b)) {
//   console.log(a & b);
// } else {
//   console.log("It should either a is equal to b or a is NOT equal to b");
// }

// 6               arr[] size n = 6
// -4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]

// let arr = [-4, 3, -9, 0, 4, 1];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     console.log(arr[i]);
//   } else if (arr[i] < 0) {
//     console.log(arr[i]);
//   } else {
//     console.log(arr[i]);
//   }
// }

// let arr = [-4, 3, -9, 0, 4, 1];
// let negativeCount = 0;
// let positiveCount = 0;
// let zeroCount = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     negativeCount++;
//   } else if (arr[i] > 0) {
//     positiveCount++;
//   } else {
//     zeroCount++;
//   }
// }

// console.log("Negative numbers: " + negativeCount);
// console.log("Positive numbers: " + positiveCount);
// console.log("Zeros: " + zeroCount);

// let arr = [-4, 3, -9, 0, 4, 1];

// let positivecount = 0;
// let negativecount = 0;
// let zerocount = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     positivecount++;
//   } else if (arr[i] < 0) {
//     negativecount++;
//   } else {
//     zerocount++;
//   }
// }
// let tot = arr.length;
// console.log(positivecount / tot);
// console.log(negativecount / tot);
// console.log(zerocount / tot);

//// let firstdiv = positivecount / tot;
// //let seconddiv = negativecount / tot;
//// let lastdiv = zerocount / tot;

//// console.log(firstdiv);
//// console.log(seconddiv);
//// console.log(lastdiv);

// let n = 4;

// let row = " ";
// for (let i = 1; i <= n; i++) {
//   row += i + " ";
// }
// console.log(row);

// let out = " ";
// for (let i = n - 2; i <= n - 1; i++) {
//   out += i + "     ";
// }
// console.log(out);

// let rev = " ";
// for (let i = n - 1; i >= n - 2; i--) {
//   rev += i + "     ";
// }
// console.log(rev);
// let run = " ";
// for (let i = n; i >= 1; i--) {
//   run += i + " ";
// }
// console.log(run);

// Sample Input 0

// 4
// let candle = [3, 2, 1, 3];
// // Sample Output 0

// // 2
// // Explanation 0

// // Candle heights are . The tallest candles are  units, and there are  of them.

// let a = candle[0];

// for (let i = 0; i < candle.length; i++) {
//   if (a < candle[i]) {
//     a = candle[i];
//   }
// }
// let one = a;
// // console.log(one);

// let count = 0;
// for (let i = 0; i < candle.length; i++) {
//   if (one == candle[i]) {
//     count++;
//   }
// }
// console.log(count);

// let n = 5;
// let count = 1;
// let str = "";
// for (let i = 1; i <= n; i++) {
//   for (let k = 1; k <= n - i; k++) {
//     str += " ";
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     str += count;
//     count++;
//   }
//   str += "\n";
// }
// console.log(str);

// let n = 3;
// let output = 1;
// for (let i = 1; i <= n; i++) {
//   let run = "";
//   for (let j = 1; j <= n - i; j++) {
//     run += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     run += output++;
//   }
//   console.log(run);
// }

// const array1 = [new Date("21 Dec 1997 19:12:00 UTC")];
// const localeString = array1.toLocaleString("en", { timeZone: "UTC" });

// console.log(localeString);

// if (hrs < 10) hours = "0" + hours;
// if (mnts < 10) minutes = "0" + minutes;
// lettimes = hours + ":" + minutes + ":00";

// const timeString = "18:00:00";
// // Prepend any date. Use your birthday.
// const timeString12hr = new Date(
//   "1970-01-01T" + timeString + "Z"
// ).toLocaleTimeString("en-US", {
//   timeZone: "UTC",
//   hour12: true,
//   hour: "numeric",
//   minute: "numeric",
// });
// document.getElementById("myTime").innerText = timeString12hr;

// function timeConversion(s) {
//   let hour = parseInt(s.substring(0, 2));
//   const minute = s.substring(3, 5);
//   const second = s.substring(6, 8);
//   const meridian = s.substring(8, 10);

//   if (meridian === "PM" && hour !== 12) {
//     hour += 12;
//   } else if (meridian === "AM" && hour === 12) {
//     hour = 0;
//   }

//   return hour.toString().padStart(2, "0") + ":" + minute + ":" + second;
// }

// const s = "07:05:45PM";
// console.log(timeConversion(s)); // Output: '19:05:45'

// let a = [48, 1, 4, 7];

// //output
// //[1, 48, 4, 7]

// for (let i = 0; i < a.length; i++) {
//   if (a[0] < a[i]) {
//     a[0] = a[i];
//   }
// }

// let n = 15;

// for (let i = 1; i <= n; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("Superstar Rajnikanth");
//   } else if (i % 3 == 0) {
//     console.log("Superstar");
//   } else if (i % 5 == 0) {
//     console.log("Rajnikanth");
//   } else {
//     console.log(i);
//   }
// }
// let a = [48, 1, 4, 7];
// let min = Math.min(...a);
// let minIndex = a.indexOf(min);

// if (minIndex !== 0) {
//   a.splice(minIndex, 1); // Remove the minimum element
//   a.unshift(min); // Add the minimum element to the front
// }

// console.log(a); // Output: [1, 48, 4, 7]

// let a = [8, 4, 3, 1, 7];
// let min1 = Infinity;
// let min2 = Infinity;

// for (let i = 0; i < a.length; i++) {
//   if (a[i] < min1) {
//     min2 = min1;
//     min1 = a[i];
//   } else if (a[i] < min2) {
//     min2 = a[i];
//   }
// }

// a.splice(a.indexOf(min1), 1); // Remove the first minimum element
// a.splice(a.indexOf(min2), 1); // Remove the second minimum element
// a.unshift(min1, min2); // Add the minimum elements to the front

// console.log(a); // Output: [1, 3, 4, 8, 7]

// let arr = [5, 10, 1, 2, 8];
// arr.sort(function (a, b) {
//   return a - b;
// });

// console.log(arr); // Output: [1, 2, 5, 8, 10]

// let n = 4;
// for (let i = 1; i <= n; i++) {
//   let str = "";
//   for (let j = 1; j <= n - i; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= i; k++) {
//     str += k;
//   }
//   for (let l = i - 1; l >= 1; l--) {
//     str += l;
//   }
//   console.log(str);
// }
// for (let i = 1; i <= n - 1; i++) {
//   let str = "";
//   for (let j = 1; j <= i; j++) {
//     str += " ";
//   }
//   for (let k = 1; k <= n - i; k++) {
//     str += k;
//   }
//   for (let l = n - 1 - i; l >= 1; l--) {
//     str += l;
//   }
//   console.log(str);
// }

// let day = "monday";
// switch (day) {
//   case "monday":
//     console.log("monday");
//     break;
//   case "tueday":
//     console.log("tueday");
//     break;
//   case "wednesday":
//     console.log("wednesday");
//     break;
//   default:
//     console.log("not a day");
//     break;
// }

// In this code, the variable i is initialized to 1, and the code block inside the do-while loop is executed once. The console.log() function is used to print the value of i to the console. The i variable is then incremented by 1 using the i++ statement.

// The condition i <= 5 is then checked. If the condition is true (i.e., if i is less than or equal to 5), the code block is executed again. This process continues until the condition is false (i.e., i is greater than 5). Therefore, the output of this code would be:

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// let s = "07:05:45AM";
// let hour = parseInt(s.substring(0, 2));
// const minute = s.substring(3, 5);
// const second = s.substring(6, 8);
// const meridian = s.substring(8, 10);

// if (meridian === "PM" && hour !== 12) {
//   hour += 12;
// } else if (meridian === "AM" && hour === 12) {
//   hour = 0;
// }

// console.log(hour.toString().padStart(2, "0") + ":" + minute + ":" + second);

// let a = [3, 4, 1, 2, 7];

// // Implement swap algorithm to sort the array in ascending order
// for (let i = 0; i < a.length; i++) {
//   for (let j = i + 1; j < a.length; j++) {
//     if (a[j] < a[i]) {
//       let temp = a[i];
//       a[i] = a[j];
//       a[j] = temp;
//     }
//   }
// }

// console.log(a); // Output: [1, 3, 4, 8]

// let i = 1;
// while (i < 10) {
//   console.log(i);
//   i++;
// }
//
// let run = " ";
// let n = 9;
// for (let i = n; i >= 1; i--) {
//   run += " " + i;
// }
// console.log(run);

// let s = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < s.length; i++) {
//   for (let j = 0; j < s[i].length; j++) {
//     console.log(s[i][j]);
//   }
// }

// let str = "bleedy";
// // let str_1 = str.split("");
// // console.log(str_1);

// let palindrome = str.split("").reverse().join("");
// //console.log(palindrome);

// if (str == palindrome) {
//   console.log("correct");
// } else {
//   console.log("incorrect");
// }

// let str = "malayalam";
// let str1 = str.split("y");
// console.log(str1);
// let rev = str1[0];
// console.log(rev);
// let st = rev;
// let ori = str1[0].split("");
// console.log(ori);

// let a = [1, 2, 3, 2, 2, 4];
// let count = {};
// for (let i = 0; i < a.length; i++) {
//   if (count[a[i]]) {
//     count[a[i]]++;
//   } else {
//     count[a[i]] = 1;
//   }
// }
// console.log(count);

// let a = [1, 2, 3, 2, 2, 4];
// let count = [];
// for (let i = 0; i < a.length; i++) {
//   if (!count[a[i]]) {
//     count[a[i]] = 0;
//   }
//   count[a[i]]++;
// }
// let result = "";
// for (let i = 0; i < count.length; i++) {
//   if (count[i]) {
//     result += i + " comes " + count[i] + " times, ";
//   }
// }

// console.log(result);

// const myString = "Hello, world!";
// const char = myString.charAt(1);
// console.log(char); // Output: "e"

// Math.floor(4.5); // returns 4
// Math.floor(7.9); // returns 7
// Math.floor(-2.5); // returns -3

// let to = Math.floor(Math.random() * 10);
// console.log(to);

// const request = new Request("/array.js", {
//   method: "POST",
//   body: "Hello world",
// });

// request.body; // ReadableStream

// const myRequest = new Request(
//   "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg"
// );
// const myMethod = myRequest.method;
// console.log(myMethod);
// let c = [0, 0, 1, 0, 0, 1, 0];
// let r = 0;
// for (let i = 0; i < c.length; i++) {
//   r++;
//   if (i + 2 < c.length && c[i + 2] == 0) {
//     i += 1;
//   }
//   console.log(r - 1);
// }
// let arr = [2, 3, 4, 1, 5];
// let counter = 0;

// for (let i = 0; i < arr.length - 1; i++) {
//   let min = i;

//   for (let j = i; j < arr.length; j++) {
//     if (arr[min] > arr[j]) {
//       min = j;
//     }
//   }

//   // swap
//   if (i !== min) {
//     let tmp = arr[i];
//     arr[i] = arr[min];
//     arr[min] = tmp;
//     counter++;
//   }
//   console.log(counter);
// }

// let day = "monday";
// switch (day) {
//   case "monday":
//     console.log("monday");
//     break;
//   case "tueday":
//     console.log("tueday");
//     break;
//   case "wednesday":
//     console.log("wednesday");
//     break;
//   default:
//     console.log("not a day");
//     break;
// }

// let str = "My world is none.";
// // let find = str.search("none");
// // console.log(find);
// let result = str.replace("none", "uthman");
// console.log(result);

// let arr = "learning";
// let a = arr.split("");

// console.log(a);

// let a = ["l", "e", "a", "r", "n", "i", "n", "g"];

// let a = [1, 2, 3, 4, , 3, 4, 4, 5, 5, 5, 5, 5, 5, 4, 3, 2, 1];
// let count = [];
// for (let i = 0; i < a.length; i++) {
//   if (!count[a[i]]) {
//     count[a[i]] = 0;
//   }
//   count[a[i]]++;
// }
// let result = "";
// for (let i = 0; i < count.length; i++) {
//   if (count[i]) {
//     result += i + " come " + count[i] + " times, ";
//   }
// }
// console.log(result);

// let arr = [1, 3, 3, 4, 6, 8, 8, 9, 100, 100];
// for (i = 0; i < arr.length; i++) {
//   for (j = i + 1; j < arr.length; j++) {
//     if (arr[i] === arr[j]) {
//       arr.splice(j, 1);
//     }
//   }
// }
// console.log(arr);

// let a = [1, 2, 3, 4, , 3, 4, 4, 5, 5, 5, 5, 5, 5, 4, 3, 2, 1];

// let a = ["l", "e", "a", "r", "n", "i", "n", "g"];
// let count = [];
// for (let i = 0; i < a.length; i++) {
//   if (!count[a[i]]) {
//     count[a[i]] = 0;
//   }
//   count[a[i]]++;
// }
// let result = "";
// for (let i = 0; i < count.length; i++) {
//   if (count[i]) {
//     result += i + " come " + count[i] + " times, ";
//   }
// }
// console.log(result);

let i = 480;
let j = 105;
console.log(i % j);
