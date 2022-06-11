// Is this a triangle?
function isTriangle(a, b, c) {
  return a + b <= c ? false : a + c <= b ? false : b + c <= a ? false : true;
}

// Find the next perfect square!
function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

//   Credit Card Mask
// return masked string
function maskify(cc) {
  let len = cc.length - 4;
  return cc
    .split("")
    .map((el, i) => (el = i < len ? "#" : el))
    .join("");
}

//   Sum of odd numbers
function rowSumOddNumbers(n) {
  let row = n * n - (n - 1);
  let ans = 0;
  let count = 0;

  while (count < n) {
    if (row % 2 !== 0) {
      ans += row;
      count++;
    }
    row++;
  }
  return ans;
}

// Find the divisors!
function divisors(integer) {
  let n = 2;
  let divisors = [];
  while (n < integer) {
    if (integer % n === 0) {
      divisors.push(n);
    }
    n++;
  }
  if (divisors.length === 0) {
    divisors.push(`${integer} is prime`);
    return divisors.join(",");
  } else {
    return divisors;
  }
}

// Return Negative
function makeNegative(num) {
  return num < 0 ? num : num === 0 ? 0 : -num;
}

//   Remove First and Last Character
function removeChar(str) {
  return str
    .split("")
    .map((el, i) => (el = i === 0 ? "" : i === str.length - 1 ? "" : el))
    .join("");
}

function noSpace(x) {
  return x.replace(/\s/g, "");
}

//    Remove String Spaces
function noSpace(x) {
  return x.replace(/\s/g, "");
}

//    Convert boolean values to strings 'Yes' or 'No'.
function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

// Convert a Number to a String!
function numberToString(num) {
  return String(num);
}

// Basic Mathematical Operations
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

// Sum of the first nth term of Series
function SeriesSum(n) {
  if (n === 0) {
    return "0.00";
  }
  let sum = 0;
  for (let i = 0; i < n; i++) {
    let divis = i * 3 + 1;
    sum += 1 / divis;
  }
  return String(sum.toFixed(2));
}

//  Keep Hydrated!
function litres(time) {
  return Math.floor(time / 2);
}
