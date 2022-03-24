/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
    digits[digits.length-1] +=1;
    let j = digits.length-1;
    for(let i = 0 ;i<digits.length;i++){
        if(digits[j]<10){
            return digits
        };
        digits[j] = 0;
        if(j>0){
            j--;
            digits[j] +=1;
        }else{
            digits.unshift(1)
        }
    }
};
