/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
   const mot = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const inverse = mot.split('').reverse().join('')
    if(mot==inverse){
        return true;
    }else{
        return false;
    }

};