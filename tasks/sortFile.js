const fs = require('fs');
const text = fs.readFileSync('./numbers.txt', 'utf-8');
const numbers = text.split('\n');

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = Number(numbers[i]);
// };

function bitSet(table, num) {
    const index = Math.floor(num / 31);
    const pos = num % 31;
   
    table[index] = table[index] | (1 << pos);

    return table[index];
}

function bitGet(table, num) {
    const index = Math.floor(num / 31);
    const pos = num % 31;

    if (table[index] & (1 << pos)) {
        return table[index];
    };

    return false;
}

function buildVector(bitCount) {
    // const elementCount = Math.ceil(bitCount / 31);
    const table = new Array(bitCount);

    for (let i = 0; i < bitCount; i++) {
        table[i] = 0;
    };

    return table;
};
let arrSorted = [];


let table = new Array(256);



for (let i = 0; i < numbers.length; i++) {
    

    for (let j = 0; j < table.length; j++) {
        table[j] = 0;
    };
     
    const index = Math.floor(numbers[i] / 31);
    const pos = numbers[i] % 31;
   console.log(pos);
    table[index] = table[index] | (1 << pos);

    arrSorted.push(pos)
  

};





console.log(arrSorted);