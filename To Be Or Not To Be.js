/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    return{
        toBe : function(exp){
        if(val===exp){
            return true;
        }
        else{
            throw new Error("Not Equal");
        }
    },
    notToBe : function(exp){
        if(val!==exp){
            return true;
        }
        else{
            throw new Error("Equal")
        }
    }
    }
};

try {
    console.log({ value: expect(5).toBe(5) });  // Output: { value: true }
} catch (e) {
    console.log({ error: e.message });
}
  
try {
    console.log({ value: expect(5).toBe(null) });  // Output: { error: "Not Equal" }
} catch (e) {
    console.log({ error: e.message });
}
  
try {
    console.log({ value: expect(5).notToBe(null) });  // Output: { value: true }
} catch (e) {
    console.log({ error: e.message });
}