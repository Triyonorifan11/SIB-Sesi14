// latihan 6
function gcd(num1, num2){
    if(num2 == 0){
        return num1
    }else{
        return gcd(num2, num1 % num2)
                // gcd(16 , 12 % 16) ==> gcd(16, 12)
                // gcd(12 , 16 % 12) ==> gcd(12 , 4)
                // gcd(4, 12 % 12) ==> gcd(4, 0)
                // return 4
    }
}

console.log(gcd(12,16));
console.log(gcd(50,40));
console.log(gcd(22,99));
console.log(gcd(24,36));
console.log(gcd(17,23));
console.log(gcd(17,0));