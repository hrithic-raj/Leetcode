let cancellable= function(fn,args,t){
    let timeoutid= setTimeout(()=>{
        let result = fn(...args)
        console.log(`[{"time": ${t}, "returned": ${result}}]`);
    },t);
    return function cancelFn(){
        clearTimeout(timeoutid);
    };
}

// Example 1
const cancelTimeMs1 = 50;
const cancelFn1 = cancellable((x) => x * 5, [2], 20);
setTimeout(cancelFn1, cancelTimeMs1); // This will not cancel the execution

// Example 2
const cancelTimeMs2 = 50;
const cancelFn2 = cancellable((x) => x ** 2, [2], 100);
setTimeout(cancelFn2, cancelTimeMs2); // This will cancel the execution

// Example 3
const cancelTimeMs3 = 100;
const cancelFn3 = cancellable((x1, x2) => x1 * x2, [2, 4], 30);
setTimeout(cancelFn3, cancelTimeMs3); // This will not cancel the execution