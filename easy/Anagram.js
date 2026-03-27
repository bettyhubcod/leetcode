/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length==t.length){
        let tab1=s.split("")
        let tab2=t.split("")
        for(let i=0;i<tab1.length;i++){
            for(let j=0;j<tab2.length;j++){
                if(tab1[i]==tab2[j]){
                    tab2.splice(j,1)
                    break;
                }
            }
        }
        if(tab2.length==0){
            return true
        }else{
            return false
        }
    }else{
        return false
    }
    
};