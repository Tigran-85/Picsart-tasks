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
    const elementCount = Math.ceil(bitCount / 31);
    const table = new Array(elementCount);

    for (let i = 0; i < elementCount; i++) {
        table[i] = 0;
    };

    return table;
}

const table = buildVector(256);

console.log(bitSet(table, 40));
console.log(bitGet(table, 40));
