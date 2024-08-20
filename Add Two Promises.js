var addTwoPromises = async function(promise1, promise2) {
    const result1= await promise1;
    const result2= await promise2;

    return result1+result2;
};

// Example 1:
const promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20));
const promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60));

addTwoPromises(promise1, promise2).then(result => {
  console.log(result); // Output: 7
});

// Example 2:
const promise3 = new Promise(resolve => setTimeout(() => resolve(10), 50));
const promise4 = new Promise(resolve => setTimeout(() => resolve(-12), 30));

addTwoPromises(promise3, promise4).then(result => {
  console.log(result); // Output: -2
});