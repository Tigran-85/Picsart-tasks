function printRecursive(num) {
   if (num === 0) {
        console.log(0);
        return;
   };

    if (num > 0) {
        
        printRecursive(num - 1);
        console.log(num);
        return 'end'
    };

};

console.log(printRecursive(5));