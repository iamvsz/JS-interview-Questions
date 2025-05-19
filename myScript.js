console.log("Hello World!");


// Removing Duplicates of an Array.
const arrStrings = ["Vishal", "Vaibhav", "Vishal", "Vaibhav", "Vishal"];

console.log(arrStrings);
const uniqueArr = [...new Set(arrStrings)];
console.log(uniqueArr);


//Removing Duplicates of an Array using filter method.

const arrStrings2 = ["Vishal", "Vaibhav", "Vishal", "Vaibhav", "Vishal"];
const filteredArr = arrStrings2.filter((item, index) => arrStrings2.indexOf(item) === index);
console.log(filteredArr);

// Removing Duplicates of an Array using reduce method.
const arrStrings3 = ["Vishal", "Vaibhav", "Vishal", "Vaibhav", "Vishal"];
const reducedArr = arrStrings3.reduce((acc, curr) => {
  if (!acc.includes(curr)) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(reducedArr);

//Filter out falsy values from an array

const inputArray = [1, 0, false, null, "", "hello", undefined, NaN, 2 ];

//expected output: [1, "hello", 2]

const filteredArray = inputArray.filter(Boolean);
console.log(filteredArray); // [1, "hello", 2]
