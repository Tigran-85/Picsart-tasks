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
    const elementCount = Math.ceil(bitCount / 32);
    const table = new Array(elementCount);

    for (let i = 0; i < elementCount; i++) {
        table[i] = 0;
    };

    return table;
}

const table = buildVector(640);

console.log(bitSet(table, 204));
console.log(bitGet(table, 204));
