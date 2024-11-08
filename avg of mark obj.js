// Create the function that takes an object and returns the average of marks. 
// (Score - 2) 
// Example: getAverage({name: "John", marks: [25, 45, 10, 30] }) ➞ 27.5 
// getAverage({name: "Kevin", marks: [50, 45, 40, 40, 25] }) ➞ 40

function avgOfMark(obj){
    let arr=obj.marks;
    let avg=arr.reduce((total,value)=>total+value)/arr.length;
    return avg
}
console.log(avgOfMark({name: "John", marks: [25, 45, 10, 30] }));
console.log(avgOfMark({name: "Kevin", marks: [50, 45, 40, 40, 25] }));
