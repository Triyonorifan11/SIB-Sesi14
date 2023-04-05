// Latihan 1
function compareNumbers(number1, number2){
    if( typeof(number1) && typeof(number2) === 'number' ){
        if(number2 > number1){
            return true;
        }else if(number1 === number2){
            return -1
        }else{
            return false;
        }
    }else{
        return 'Harap masukkan angka'
    }
}
console.log(compareNumbers(5,8));
console.log(compareNumbers(5,3));
console.log(compareNumbers(3,3));
console.log(compareNumbers(2,2));
console.log(compareNumbers(17,2));
console.log(compareNumbers('hai','hari'));