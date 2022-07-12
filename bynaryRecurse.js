let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binaryRecurse(array, num) {

    let halfArray = Math.ceil(array.length/2);

    if (num === array[halfArray]) {
        return num;
    };

    if (num < array[halfArray]) {
        array.splice(array.length/2);
        binaryRecurse(array, num);
    };

    if (num > array[halfArray]) {
        let newArr = array.splice(array.length/2);
        binaryRecurse(newArr, num);
    }

    return num;
};

console.log(binaryRecurse(arr, 14));