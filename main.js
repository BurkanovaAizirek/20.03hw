// 1)-----------------Напишите функцию makeCounter, которая создает счетчик, который увеличивается на единицу при каждом вызове.
function makeCounter() {
    let count = 5;
    
    return function() {
      return ++count;
    };
  }
  
  const countt = makeCounter();
  
  // Пример использования
  console.log(countt()); 
  console.log(countt()); 
  console.log(countt()); 
  
  // 2)---------------Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b. Да, именно таким образом, используя двойные круглые скобки (не опечатка).sum(1)(2) = 3
  // sum(5)(-1) = 4
  
  function sum(a) {
    return function(b) {
      return a + b;
    };
  }
  
  console.log(sum(10)(2)); 
  console.log(sum(5)(-3)); 
  
  
  // 3)-----------------Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
  // sumTo(1) = 1
  // sumTo(2) = 2 + 1 = 3
  // sumTo(3) = 3 + 2 + 1 = 6
  // sumTo(4) = 4 + 3 + 2 + 1 = 10
  
  function summTo(n){
      return (n * (n+1)) /2;
  }
  console.log(summTo(100)); 
  console.log(summTo(70)); 
  console.log(summTo(80));
  console.log(summTo(4))
  //с помощью формулы арифметической прогрессии
  //  (n * (n+1)) /2;
  
  
  // есть и другой способ найти сумму чисел в определенном диапазоне, например 80
  // где-то сталкивалась с этим способом и попробовала применить его тоже
  //  (80/2-1)*80+(80/2)+80   => 39*80+40+80 = 3240
  
  function sumTo(n){
      return (n/2 - 1)*n + (n/2)+n;
  }
  console.log(sumTo(100)); 
  console.log(sumTo(70)); 
  console.log(sumTo(80));
  console.log(sumTo(4))
  