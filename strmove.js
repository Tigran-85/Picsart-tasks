let arr = ["h", "e", "l", "l", "o"];
let arrCopy = ["h", "e", "l", "l", "o"];

function strmove(array, num) {
    // let first;
    // let sec;
    // console.log(array);
    // for(let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < num; j++) {
            
    //         first = arr[j];
    //         sec = arr[j + num]; 
    //         array[j + num] = first;
    //         array[j + num + 1] = sec;
    //     }
    //     if (!array[i + num]) {
    //         //for (let j = 0; j < num; j++) {
    //            // array[j] = arrCopy[arrCopy.length - (j + 1)];
    //         //  array[j + num] = arrCopy[j + (num - 1)];
                
    //       //  }
            
    //         return array;
    //      }
        
    

    //     // array[i + num] = arrCopy[i + (num - 1)];
        
    // }


    let save = array[0];
    for (let i = 0; i < array.Length; i++)
    {
       if (array[i] != array[0])
       array[i] = array[i - 1];
    }

    return array;

}

console.log(strmove(arr, 1));
