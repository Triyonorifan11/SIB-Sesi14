// latihan 7
function isPrima(n){
    if (n <= 1) {
        return false;
      }
    
      // mencari faktor dari n
      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
          return false;
        }
      }
    
      return true;
}

console.log(isPrima(3));
console.log(isPrima(7));
console.log(isPrima(6));
console.log(isPrima(23));
console.log(isPrima(33));