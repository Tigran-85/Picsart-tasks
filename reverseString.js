function reverseString(str) {
    let newStr = '';
    for (let i = 1; i <= str.length; i++) {
        newStr += str.at(-i);
        
    };

    return newStr;
}

console.log(reverseString('tigran'));