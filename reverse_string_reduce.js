// Reverse a string using only the reduce method

let str = 'abcdef';

let str2 = str.split('').reduce((acc, elm) =>  elm + acc);