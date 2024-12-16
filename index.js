
// 1-masala br marta kegan elementni topish
// function findUnique(arr) {
//     return arr.find(el => arr.indexOf(el) === arr.lastIndexOf(el));
// }
// console.log(findUnique([1, 2, 3, 2, 1, 4]));


// 2-masala ikki arrayning juft elementlari ygndisini topish
// function sumCommonEvenNumbers(arr1, arr2) {
//     const common = arr1.filter(num => arr2.includes(num) && num % 2 === 0);
//     return common.reduce((sum, num) => sum + num, 0);
// }
// console.log(sumCommonEvenNumbers([1, 2, 4, 6], [2, 3, 4, 8]));


// 3-masala eng kop takrorlangan elementni topish

// function mostFrequentElement(arr) {
//     const frequency = {};
//     arr.forEach(el => frequency[el] = (frequency[el] || 0) + 1);
//     return Object.keys(frequency).reduce((a, b) => frequency[a] > frequency[b] ? a : b);
// }
// console.log(mostFrequentElement([1, 3, 2, 1, 4, 1, 3, 1, 5, 1]));

// 4-masala ikta arrayning umumiy elementlarini topish

// function findCommonElements(arr1, arr2) {
//     return arr1.filter(el => arr2.includes(el));
// }
// console.log(findCommonElements([1, 2, 3, 4], [3, 4, 5, 6]));

// 5-masala musbat manfiy va 0ning foizlarini topish
// function foiz(arr) {
//     const total = arr.length;
//     const positive = arr.filter(num => num > 0).length;
//     const negative = arr.filter(num => num < 0).length;
//     const zero = arr.filter(num => num === 0).length;
    
//     return {
//         positive: ((positive / total) * 100).toFixed(2),
//         negative: ((negative / total) * 100).toFixed(2),
//         zero: ((zero / total) * 100).toFixed(2)
//     };
// }
// console.log(foiz([1, -2, 0, 4, -5, 6, 0]));


// 6-masala eng uzun ismni topish
// function findLongestName(names) {
//     return names.reduce((longest, name) => name.length > longest.length ? name : longest, "");
// }
// console.log(findLongestName(["Ali", "Bekzod", "Shavkat", "Gulnora"])); 


// 7-masala arrayrni k qadam onga surish
// function rotateArray(arr, k) {
//     k %= arr.length;
//     return [...arr.slice(-k), ...arr.slice(0, -k)];
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2));


// 8-masala k indeksdagi element bilan oxirgi elementni almashtirish
function swapWithLast(arr, k) {
    const lastIndex = arr.length - 1;
    [arr[k], arr[lastIndex]] = [arr[lastIndex], arr[k]];
    return arr;
}
console.log(swapWithLast([1, 2, 3, 4, 5], 2)); 
