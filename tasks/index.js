function foo(n) {
    console.log('foo');
    if (n <= 1) {
        return 1;
    };

    foo.cache = foo.cache ?? [];

    if (!foo.cache[n]) {
     foo.cache[n] = n * foo(n - 1);
    };

    return foo.cache[n];
};



function fib(n) {
    console.log('fib');
    if (n <= 0) {
        return 0;    
    } else if(n === 1) {
        return 1;
    };

    fib.cache = fib.cache ?? [];

    if (!fib.cache[n]) {
        fib.cache[n] = fib(n - 1) + fib(n - 2);
    };
    
    return fib.cache[n];
};



function merge(arr1, arr2, arr3, arr4, arr5) {
    let targetArray = [];

    let arrs = [arr1, arr2, arr3, arr4, arr5]

    let array_1 = arr1[0];
    let array_2 = arr2[0];
    let array_3 = arr3[0]; 
    let array_4 = arr4[0]; 
    let array_5 = arr5[0];
    let count = 0;

    let maxLength = Math.max(arr1.length, arr2.length, arr3.length, arr4.length, arr5.length);

    let arr = [arr1[0], arr2[0], arr3[0], arr4[0], arr5[0]];
    let minValue = arr[0];

    for (let i = 0; i < maxLength; i++) {
        if (arr1.length === 0 || arr2.length === 0 || arr3.length === 0 || arr4.length === 0 || arr5.length === 0) {
            continue;
        };

    
        for (let j = 0; j < arr.length; j++) {
            if(minValue > arr[j + 1]){
                minValue = arr[j + 1];
                targetArray.push(arr[j + 1]);
            };
        };



        for (let k = 0; k < arr.length; k++) {
            if(minValue === arr[k]) {
                targetArray.push(arr[k]);
            };   
        };


    }

    // function sortFirst() {
    //     arr.sort((a, b) => {return a - b});

    //     for (let i = 0; i < arr.length; i++) {
    //         if (arr[0] === arr[i + 1]) {
    //             targetArray.push(arr[i + 1]);
    //         }; 
    // };

    //     targetArray.push(arr[0]);
    // };
        
    // sortFirst();
    

    return targetArray;
};

console.log(merge([1, 2, 3, 4, 5], [4, 7, 9], [1, 5, 6, 9], [2, 5, 8, 10], [4, 6]));





function min(arr, targetArray = []){
    let minValue = arr[0];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if(minValue > arr[i + 1]){
            minValue = arr[i + 1]
        };
        
    };

    // arr1.push(minValue);

    for (let i = 0; i < arr.length; i++) {
        if(minValue === arr[i]) {
            targetArray.push(arr[i]);
        };   
    };
    
    return targetArray; 
};



// console.log(min([2, 2, 2, 3, 1, 1]));
