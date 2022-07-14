let arr = ["h", "e", "l", "l", "o"];
let arrCopy = ["h", "e", "l", "l", "o"];

function strmove(array, num) {
    
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        if (!array[i + num]) {
            for (let j = 0; j < num; j++) {
                array[j] = arrCopy[arrCopy.length - (j + 1)];
            //  array[j + num] = arrCopy[j + (num - 1)];
                
            }
            
            return array;
         }
        

        array[i + num] = arrCopy[i + (num - 1)];
        
    }

    return array;

}

console.log(strmove(arr, 1));