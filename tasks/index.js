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

    let maxLength = arr1.length + arr2.length + arr3.length + arr4.length + arr5.length;
    let arrs = [arr1, arr2, arr3, arr4, arr5];
    let arr = [];

    for (let i = 0; i < maxLength; i++) {
       
        arr = [arr1[0], arr2[0], arr3[0], arr4[0], arr5[0]];

        let minValue;
        let count = 0;

        for (let index = 0; index < arr.length; index++) {
            if (arr[count]) {
                minValue = arr[count];
            } else {
                count++;
                minValue = arr[count];
            };
            
        }
    
        for (let j = 0; j < arr.length; j++) {
            if(minValue > arr[j + 1]){
                minValue = arr[j + 1];
            };
        };

        for (let k = 0; k < arr.length; k++) {
            if (arrs[k][0] === minValue) {
               let val = arrs[k].shift();
               if (typeof val === 'number') {
                targetArray.push(val);
               };
            };   
        };
    };

    return targetArray;
};

console.log(merge( [1, 4, 6, 8], [5, 7, 8], [11, 35], [5, 8, 66], [1, 2, 3, 4]));
