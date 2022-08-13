function isUnique(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (!obj[str[i]]) {
            obj[str[i]] = str[i];
        }else {
            return false
        }
    };
    return true;
};

console.log(isUnique('Tigr👩an👩'));