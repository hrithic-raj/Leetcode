function heightChecker(height){
 let exp=[...height].sort((a,b)=>a-b)
 let count=0;
 for(let i=0; i<=height.length-1; i++){
    if(exp[i]!==height[i]){
        count++
    }
 }
 return count
}
console.log(heightChecker([1,1,4,2,1,3])); // 3
console.log(heightChecker([5,1,2,3,4])); // 5