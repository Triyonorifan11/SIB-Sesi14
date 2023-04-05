// latihan 2
function reverseString(str){
    let newStr = ''
    for(let i = str.length - 1; i>=0; i--){
        newStr += str[i]
    }
    return newStr
}

console.log(reverseString('Halo'));
console.log(reverseString('Rifan'));
console.log(reverseString('Ifan'));
console.log(reverseString('Hello World Coders'));