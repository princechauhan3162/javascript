// // print array
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
let a = [10, 20, 30, 40, 50];
printArray(a);

// sum of array

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log("Sum =", sum);
}
let a = [10, 20, 30, 40];
sumArray(a);

// find large element

function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log("Largest =", max);
}
let a = [12, 45, 7, 89, 25];
largest(a);

// find small element

function smallest(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Smallest =", min);
}
let a = [12, 45, 7, 89, 25];
smallest(a);

// count even numbers

function evenCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      count++;
    }
  }
  console.log("Even Count =", count);
}
let a = [10, 15, 20, 25, 30];
evenCount(a);

// count odd numbers

function oddCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      count++;
    }
  }
  console.log("Odd Count =", count);
}
let a = [10, 15, 20, 25, 30];
oddCount(a);

// reverse array

function reverseArray(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}
let a = [1, 2, 3, 4, 5];
reverseArray(a);

// print positive numbers

function positive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(arr[i]);
    }
  }
}
let a = [-5, 10, -2, 15, 20];
positive(a);

// print multiplication by 2
function multiply(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i] * 2);
  }
}
let a = [2, 4, 6, 8];
multiply(a);

// count array elements
function count(arr) {
  console.log("Total Elements =", arr.length);
}
let a = [10, 20, 30, 40, 50];
count(a);
