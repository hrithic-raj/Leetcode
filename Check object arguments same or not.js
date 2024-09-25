// . Create a function that checks to see if two object arguments are equal to one another.
//  Return true if the objects are equal, otherwise, return false.(score 3)
//  // The first object parameter.
//  { name: "Benny", phone: "3325558745", email: "benny@edabit.com" }
//  // The second object parameter.
//  { name: "Jason", phone: "9853759720", email: "jason@edabit.com" } ➞ false

function checkObj(obj1,obj2){
    for(let key in obj1){
        return (obj1[key]===obj2[key])
    }
}
console.log(checkObj({ name: "Benny", phone: "3325558745", email: "benny@edabit.com" },{ name: "Benny", phone: "3325558745", email: "benny@edabit.com" }))
console.log(checkObj({ name: "Benny", phone: "3325558745", email: "benny@edabit.com" },{ name: "Jason", phone: "9853759720", email: "jason@edabit.com" }))
