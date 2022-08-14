let num = 0;

function bitSet(n) {
    num = num | (1 << n);

   return num;
};

function bitGet(n) {
    if(num & (1 << n)) {
        return true;
    } else {
        return false;
    };
};

console.log(bitSet(204));
bitSet(10);
console.log(bitGet(204));