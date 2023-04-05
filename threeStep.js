// latihan 5
function threeStepAB(txt) {
    let check = []
    let txtRes = ''
    for (let i = 0; i < txt.length; i++) {
        if (txt[i] !== ' ') {
            txtRes += txt[i]
        }
    }

    for (let j = 0; j < txtRes.length; j++) {
        if (txtRes[j] === 'a') {
            check.push(j)
        }
        if (txtRes[j] === 'b') {
            check.push(j)
        }
    }
    
    for(let k=0; k<=check.length;k++){
        if(check[k+1] - check[k] === 3){
            return true
        }else{
            return false
        }
    }
   
}

console.log(threeStepAB('lane borrowed'));
console.log(threeStepAB('you are boring'));
console.log(threeStepAB('aku boring'));
console.log(threeStepAB('aku buka puasa'));
console.log(threeStepAB('barbarian'));
console.log(threeStepAB('i am sick'));
console.log(threeStepAB('bacon and meat'));