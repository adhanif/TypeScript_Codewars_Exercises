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