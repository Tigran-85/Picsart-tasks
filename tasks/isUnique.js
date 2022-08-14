function isUnique(str) {
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) { 
            return false; 
          }
          obj[str[i]] = str[i];
    };
    return true;
};

console.log(isUnique('Tigran👩'));