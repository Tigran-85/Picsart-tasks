function reverse(str) {

    let strArr = [...str];

    for (let i = 0; i < str.length/2 - 1; i++) {

        [strArr[i], strArr[strArr.length - 1- i]] = [strArr[strArr.length - 1- i], strArr[i]];
        
    };

    return strArr.join('');
    
};

console.log(reverse('Tigran👩Poghosyan'));