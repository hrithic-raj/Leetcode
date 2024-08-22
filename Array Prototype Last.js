Array.prototype.last = function() {
    if(this.length==0){
        return -1;
    }else{
        return this[this.length-1]
    }
};

let num1=[2,5,null,'wtf'];
console.log(num1.last())
let num2=[];
console.log(num2.last())