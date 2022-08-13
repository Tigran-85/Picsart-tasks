function bigIntSum(num1, num2) {
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
         sumArr.push(sum.toString());
     };
  };

  if ((+arr1[0] + +arr2[0]).toString().length > 3) {
    sumArr.push(1);
  }

  return sumArr.reverse().join('');
  
};


function bigIntDec(num1, num2) {

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

  let dec = 0;
  let decArr = [];
  let sign;

  function decrement(i) {
    dec = arr1.at(-i) - arr2.at(-i);

    if (+arr1.at(-i) > +arr2.at(-i)) {
    
      if (+dec < 10) {
        dec = '00' + dec;
      };

      if (+dec < 100 && +dec >= 10) {
        dec = '0' + dec;
      };

      decArr.push(dec.toString())
    } else {
      dec = (+arr1.at(-i) + 1000) - +arr2.at(-i);

      arr1[arr1.length - i - 1] = +arr1[arr1.length - i - 1] - 1;
      
      decArr.push(dec.toString())
    };
  };

  for (let i = 1; i < arr1.length + 1; i++) {

    if ((+arr1[0] - +arr2[0]) > 0) {
      decrement(i);
      
    } else {
      [arr1, arr2] = [arr2, arr1];
      sign = '-';
      decrement(i);
    }
    
  };

  if (sign === '-') {
    return -decArr.reverse().join('');
  };

  return decArr.reverse().join('');
};

console.log(bigIntSum(723856789502456, 623846787503894));

console.log(bigIntDec(723856789502456, 623846787503894));