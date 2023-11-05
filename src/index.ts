// Question #1: here was a test in your class and you passed it. Congratulations! But you're an ambitious person. You want to know if you're better than the average student in your class. You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!
// Note: Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

//Solution
// function betterThanAverage(classPoints: number[], yourPoints: number) : boolean {
//     const combinedArray=classPoints.concat(yourPoints)
//     let average=Math.round((combinedArray.reduce((tot: number, curr: number): number=> tot+curr,0))/combinedArray.length)
//    return yourPoints>=average?true:false
//   }
//   console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50))

// Question #2: Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.It should look like this:
// Sam Harris => S.H
// patrick feeney => P.F

//Solution
// function abbrevName(name: string): string {

//     console.log(name.split(" ")[0][0])

//     return `${name.split(" ")[0][0].toUpperCase()}.${name.split(" ")[1][0].toUpperCase()}`;
// }
// console.log(abbrevName("patrick feeney"))

// Question #3:  Write a function which takes a number and returns the corresponding ASCII char for that value.  Example:

// 65 --> 'A'
// 97 --> 'a'
// 48 --> '0

//Solution
// function getChar(c: number): string {
//   return String.fromCharCode(c);
// }
// console.log(getChar(65));

// Question #4: You will be given an array a and a value x. All you need to do is check whether the provided array contains the value. Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not.

//Solution
// const check = (a: (number | string)[], x: number | string): boolean => {
//   return a.includes(x) ? true : false;
// };
// console.log(check([66, 101], 66));

// Question #5: This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//Solution
// const simpleMultiply = (num: number): number => {
//   return num % 2 === 0 ? num * 8 : num * 9;
// };
// console.log(simpleMultiply(2));

// Question #6: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]

// const countSheeps = (arraySheeps: (boolean | undefined | null)[]): number => {
//   //   let counter: number = 0;
//   //   arraySheeps.forEach((sheep) => (sheep === true ? counter++ : sheep));
//   //   return counter;
//   return arraySheeps.filter(Boolean).length;
// };
// // prettier-ignore
// console.log(countSheeps([true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]));
