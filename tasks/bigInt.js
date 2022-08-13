function bigInt(num1, num2) {
    let chars1 = num1.toString();
    let chars2 = num2.toString();
    
    let arr1 = [];
    let arr2 = [];

  for (let i = 0; i < chars1.length; i += 3) {  
    let chunks1 = chars1.slice(i, i + 3);
    let chunks2 = chars2.slice(i, i + 3);

    arr1.push(chunks1);
    arr2.push(chunks2);
  };
  
    let sum = 0;
    let sumArr = [];
    let carry;
  for (let i = 1; i < arr1.length + 1; i++) {

    sum = +arr1.at(-i) + +arr2.at(-i);

    if (carry === 1) {
        sum = +sum + carry;   
    };

    if (sum.toString().length > 3) {
       carry = +sum.toString()[0];
       sum = sum.toString().slice(1);
       
       sumArr.push(sum);
       
    } else {
        sumArr.push(sum.toString())
    }

  }

  return sumArr.reverse().join('');
};

console.log(bigInt(123856789502456856, 623846787503894946));