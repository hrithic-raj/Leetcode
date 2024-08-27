// 1.A single number is a number that appeared only once in the MyNumbers table.
//  Find the largest single number. If there is no single number, report null.
//  Eg:
//  Input:[1,2,3,2,3,4,5,6,6,7,8]
//  Output:8
//  Input:[1,1,2,2]
//  Output:null

function singlenum(arr){
    let sarr=[];
    let obj={};
    for(let x of arr){
        obj[x]=(obj[x]||0)+1;
    }
    for(let x in obj){
        if(obj[x]===1){
            sarr.push(x);
        }
    }
      let result=null;
      if(sarr.length===0){
        result=null;
      }else{
        result=Math.max(...sarr);
      }
    return result;
}
console.log(singlenum([1,2,3,2,3,4,5,6,6,7,8]))
console.log(singlenum([1,1,2,2]));
