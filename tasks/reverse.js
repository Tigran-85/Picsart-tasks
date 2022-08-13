function reverse(str) {
    let arr = [];
    let newArr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        arr.push(str.codePointAt(i));

    };

    for (let i = 0; i < arr.length; i++) {
        newArr.push(String.fromCodePoint(arr[i]))
        
    };

    return newArr.join('');
};

console.log(reverse('Tigran👩Poghosyan'));