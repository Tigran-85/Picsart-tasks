let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function binarySearch(array, num) {
    // for(let i = 0; i < array.length; i++) {
    //     for(let j = 0; j < array.length; j++) {
    //       if(array[j] > array[j + 1]) {
    //         let min = array[j + 1];
    //         array[j + 1] = array[j];
    //         array[j] = min;
    //       }
    //     }
    //   }

        let halfArray = Math.ceil(array.length/2);
        

        while(array.length === 1) {
            if (num === array[halfArray]) {
                return num;
            };
            if (num < array[halfArray]) {
                array.splice(array.length/2);
            };
            let newArr;
            if (num > newArr[Math.ceil(newArr.length/2)]) {
                newArr = array.splice(array.length/2);
            }
            
        }    
      return num;
      
}

console.log(binarySearch(arr, 4));