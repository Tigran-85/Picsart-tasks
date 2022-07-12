function fibCache(n) {
    if(n <= 0) {
     return 0;
   } else if (n === 1) {
     return 1;
   }
   let cache = [];
 
   if(!cache[n]) {
     cache[n] = fibCache(n - 1) + fibCache(n - 2);
   }
 
   return cache[n]
 };

 console.log(fibCache(8));