function bynarySearch(arr, num) {
    
    if (arr.length) {
        let halfArr = Math.floor((arr.length)/2);
    
        if (num === arr[halfArr]) {
            return num;
        };

        if (num < arr[halfArr]) {
            arr = arr.slice(0, halfArr);
        };
        
        if (num > arr[halfArr]) {
            arr = arr.slice(halfArr + 1);
        };
        
        return bynarySearch(arr, num);
    };

    return false
    
};

console.log(bynarySearch([2, 3, 4, 5, 6, 74, 85, 116, 125], 125));