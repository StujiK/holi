# holi


DESCRIPTION:
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7





function basicOp(operation, value1, value2){
  if(operation == '+'){
    return value1 + value2;
  }
  else if (operation == '-'){
    return value1 - value2;
  }
  else if (operation == '*'){
    return value1 * value2;
  }
}





DESCRIPTION:
Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

Examples (Input -> Output)
* [4,6,2,1,9,63,-134,566]         -> max = 566, min = -134
* [-52, 56, 30, 29, -54, 0, -110] -> min = -110, max = 56
* [42, 54, 65, 87, 0]             -> min = 0, max = 87
* [5]                             -> min = 5, max = 5




solution : 



var min = function(list) {
  let min1 = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < min1) {
      min1 = list[i];
    }
  }
  return min1;
}

var max = function(list) {
  let max1 = list[0];
  for (let j = 1; j < list.length; j++) {
    if (list[j] > max1) {
      max1 = list[j];
    }
  }
  return max1;
}







DESCRIPTION:
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.


решение: 



function sumMix(x){
  let sum = 0;
  for(let i = 0;i<x.length;i++){
    const arrayElement = Number(x[i]);
    sum = sum + arrayElement;
  }
  return sum;
  
}






DESCRIPTION:
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321



sol: 





function descendingOrder(n){
  let ArrString = n.toString();
  let numStr = [];
  for(let i = 0; i<ArrString.length;i++){
    numStr.push(ArrString[i]);
  }
  
  for(let i = 0;i<numStr.length;i++){
    for(let j = i + 1; j<numStr.length; j++){
      if(numStr[i]<numStr[j]){
        let temp = numStr[i];
        numStr[i] = numStr[j];
        numStr[j] = temp;
      }
    }
  }
  
  
  let str = "";
  for(let i = 0;i<numStr.length;i++){
    str += numStr[i];
    
  }
  
  
  let sortedNum = parseInt(str, 10);
  
  return sortedNum;
  
  
}
