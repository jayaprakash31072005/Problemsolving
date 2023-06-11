let n = 5;
for (let i = 1; i <= n; i++) {
  console.log(
    tot(i) + numSpaces(n - i + 1) + numSpaces(n - i) + rightSpaces(i)
  );
}
for (let i = n - 1; i < n; i++) {
  console.log(leftnumber(i + 1) + rightnumber(i));
}
// function methods
// spaces
function numSpaces(n) {
  let run = "";
  for (let i = 1; i <= n; i++) {
    run += "  ";
  }
  return run;
}
// left staircase
function tot(n) {
  let run = "";
  for (let i = 1; i < n; i++) {
    run += i + " ";
  }
  return run;
}
function rightSpaces(n) {
  let run = "";
  for (let i = n - 1; i >= 1; i--) {
    run += i + " ";
  }
  return run;
}
function leftnumber(n) {
  let run = "";
  for (let i = 1; i <= n; i++) {
    run += i + " ";
  }
  return run;
}
function rightnumber(n) {
  let run = "";
  for (let i = n; i >= 1; i--) {
    run += i + " ";
  }
  return run;
}
