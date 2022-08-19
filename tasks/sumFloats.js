function sumFloats(a, b, sum) {
    let integerA = Math.floor(a);
    let integerB = Math.floor(b);
    let sumIntegers = integerA + integerB;
    let floatA;
    let floatB;

    if (a % 1 !== 0) {
        floatA = a.toString().split('.')[1];
    };

    if (b % 1 !== 0) {
        floatB = b.toString().split('.')[1];
    };

    if (!floatA && !floatB) {
        sum = a + b;
    };

    if (!floatA && floatB) {
        sum = +[(a + integerB), floatB].join('.');
    };

    if (floatA && !floatB) {
        sum = +[(b + integerA), floatA].join('.');
    };

    if (floatA && floatB) {
        let sumFloats = +floatA + +floatB;
        let num = sumFloats.toString().length;
        
        if (floatA.length < floatB.length) {
            if (+floatA[0] + +floatB[0] >= 10) {
                sumIntegers += 1;
            };

            let count = floatB.length - floatA.length;
            
            floatA = floatA * Math.pow(10, count);
            
            sum = +[sumIntegers.toString(), ((+floatA + +floatB) / Math.pow(10, num)).toString().slice(2)].join('.');
           
            return sum;
        };

        if (floatA.length > floatB.length) {
            
            if (+floatA[0] + +floatB[0] >= 10) {
                sumIntegers += 1;
            };
            
            let count = floatA.length - floatB.length;
    
            floatB = floatB * Math.pow(10, count);

            sum = +[sumIntegers.toString(), ((+floatA + +floatB) / Math.pow(10, num)).toString().slice(2)].join('.');

            return sum;
        };
        
        sum = +[sumIntegers, (sumFloats / Math.pow(10, num)).toString().slice(2)].join('.');
    };

    return sum;

};

console.log(sumFloats(1.9749548, 1.274));

