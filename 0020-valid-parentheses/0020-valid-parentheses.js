/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pairs = {
    ")": "(",
    "]": "[",
    "}": "{"
  };
  let stack = [];
  
  for(let char of s){
    if (char === "(" || char === "[" || char === "{"){
      stack.push(char);
    }else{
      if(pairs[char]===stack[stack.length-1]){
        console.log(stack);
        stack.pop();
      }else return false;
    }
  }
  return stack.length===0? true: false;
};