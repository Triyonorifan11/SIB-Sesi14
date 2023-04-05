// latihan 4
function isAritmatika(num){    
    let h = []
    for(let i = 0; i<= num.length -2; i++){
        let selisih = num[i] - num[i+1]
        h.push(selisih)
    }
    for(let i = 0; i<h.length; i++){
        if(h[i] == h[i+1] && h[i+1] == h[i+2]){
            return true
            // break;
        }else{
            return false
        }
    }
}

console.log(isAritmatika([1,2,3,4,5,6]));
console.log(isAritmatika([2,4,6,12,24]));
console.log(isAritmatika([2,4,6,8,10]));
console.log(isAritmatika([3,6,9,12,15,18]));