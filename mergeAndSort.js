let arr1 = [1, 5, 8, 2];
let arr2 = [4, 7, 9, 11];
let target = [];

function merge(array1, array2, targetArray) {
  for(let i = 0; i < array1.length; i++) {
    targetArray.push(array1[i], array2[i]);
  };

  for(let i = 0; i < targetArray.length; i++) {
    for(let j = 0; j < targetArray.length; j++) {
      if(targetArray[j] > targetArray[j + 1]) {
        let min = targetArray[j + 1];
        targetArray[j + 1] = targetArray[j];
        targetArray[j] = min;
      }
    }
  }

  
  return targetArray;
}

console.log(merge(arr1, arr2, target));