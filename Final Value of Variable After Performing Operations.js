/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    result=0;
    for (let x of operations){
        if(x==='++X'|| x==='X++'){
            result+=1;
        }
        else if(x==='--X'|| x==='X--'){
            result-=1;
        }
    }
    return result;
};


console.log(finalValueAfterOperations(["--X","X++","X++"]))
console.log(finalValueAfterOperations(["++X","++X","X++"]))