const fs = require('fs');
const text = fs.readFileSync('./numbers.txt', 'utf-8');
const numbers = text.split('\n');

// for (let i = 0; i < numbers.length; i++) {
//     numbers[i] = Number(numbers[i]);
// };

function bitSet(table, num) {
    const index = Math.floor(num / 32);
    const pos = num % 32;
   
    table[index] = table[index] | (1 << pos);

    return table[index];
}

function bitGet(table, num) {
    const index = Math.floor(num / 32);
    const pos = num % 32;

    if (table[index] & (1 << pos)) {
        return true;
    };

    return false;
}

function buildVector(bitCount) {
    // const elementCount = Math.ceil(bitCount / 32);
    const table = new Array(bitCount);

    for (let i = 0; i < bitCount; i++) {
        table[i] = 0;
    };

    return table;
}

const table = buildVector(256);

let arrsorted = [];

for (let i = 0; i < numbers.length; i++) {
    
    // console.log(bitSet(table, numbers[i]));
    let index = Math.floor(numbers[i]);
    let pos = numbers[i] % 32;
   
    table[index] = table[index] | (1 << i);
    // console.log(table[index], index);
};

for (let i = 0; i < table.length; i++) {
    let index = Math.floor(numbers[i]);
    let pos = numbers[i] % 32;
    // if (table[i] > 0) {
    
        if ((table[index] & (1 << i))) {
            // if (table[index] > 0) {
                arrsorted.push(table[index])
            // }
            
        };
        
    // }
    
    
}

console.log(arrsorted);