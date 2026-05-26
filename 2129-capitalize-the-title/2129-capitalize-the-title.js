/**
 * @param {string} title
 * @return {string}
 */
var capitalizeTitle = function(title) {
    let arr = title.split(' ');
    let result = [];
    for(let x of arr){
        if(x.length<=2){
            result.push(x.toLowerCase())
        }else{
            let word = x.toLowerCase();
            result.push(word[0].toUpperCase()+ word.slice(1));
        }
    }
    return result.join(' ');
};