const noSpace = (x) => {
    return x.replace(/\s/g, "");
};

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")); //, '8j8mBliB8gimjB8B8jlB'

const removeChar = (str) => {
    return str.slice(1, str.length - 1);
};

console.log(removeChar("ooopsss")); //, "oopss"

const makeUpperCase = (str) => {
    return str.toUpperCase();
};

console.log(makeUpperCase("hello")); // "HELLO"

const min = (list) => {
    return Math.min(...list);
};

const max = (list) => {
    return Math.max(...list);
};

console.log(min([-52, 56, 30, 29, -54, 0, -110])); // -110);
console.log(min([42, 54, 65, 87, 0])); // 0);
console.log(max([4, 6, 2, 1, 9, 63, -134, 566])); //, 566
console.log(max([5])); //, 5

const countPositivesSumNegatives = (input) => {
    if (input === null || input.length === 0) {
        return [];
    }
    const totalPositiveInt = input.filter((num) => num > 0);
    const sumOfNegativeInt = input.reduce((acc, val) => {
        return val < 0 ? acc + val : acc;
    }, 0);
    return [totalPositiveInt.length, sumOfNegativeInt];
};
console.log(
    countPositivesSumNegatives([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
    ])
); //[10, -65]

console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives(null));

const grow = (x) => {
    return x.reduce((acc, num) => acc * num, 1);
};
console.log(grow([1, 2, 3])); //, 6

const removeEveryOther = (arr) => {
    return arr.filter((_, index) => index % 2 === 0);
};
console.log(removeEveryOther([["Goodbye"], { Great: "Job" }])); //, [["Goodbye"]]
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const findAverage = (array) => {
    if (!array.length) {
        return 0;
    }
    const sum = array.reduce((acc, num) => acc + num, 0);
    return sum / array.length;
};

console.log(findAverage([1, 2, 3, 4])); //, 2.5
console.log(findAverage([]));
