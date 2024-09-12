/**
 * @param {number[]} hours
 * @param {number} target
 * @return {number}
 */
var numberOfEmployeesWhoMetTarget = function(hours, target) {
    let num=0;
    for(let x of hours){
        if(x>=target){
            num+=1
        }
    }
    return num;
};

console.log(numberOfEmployeesWhoMetTarget([0,2,3,4,1],2))
console.log(numberOfEmployeesWhoMetTarget([5,1,4,2,2],6))