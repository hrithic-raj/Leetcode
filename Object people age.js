// Given an object of people and their ages, return how old the people would be after n
// years have passed. (Score 2)
// Examples
// afterNYears({Joel : 32, Fred : 44, Susan : 33}, 1) ➞
// {Joel : 33, Fred : 45, Susan : 34}
// afterNYears({Baby : 2, Child : 8, Adult : 25}, 19) ➞
// {Baby : 21, Child : 27, Adult : 44}
// afterNYears({Eva : 10, Joe : 40}, 5) ➞
// {Genie : 15, Joe : 45}

function ageAdding(obj,n){
    for(let x in obj){
        obj[x]+=n
    }
    return obj;
}
console.log(ageAdding({Joel : 32, Fred : 44, Susan : 33}, 1));
console.log(ageAdding({Baby : 2, Child : 8, Adult : 25}, 19));
console.log(ageAdding({Eva : 10, Joe : 40}, 5));