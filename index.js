// calling a funcrion checkprime

function checkprime(num){
    for(let i=2;i<=num-1;i++){
        if(num%i==0){ //num %i==0 not a prime num
            return false 
        }
    }// //num %i!==0  a prime num
    return true
}
console.log("Is Number Prime  --> "+checkprime(7))

// CheckEvenOdd 
function evenOdd(num) {
    if (num % 2 === 0) {
        return true; // num is even
    }
    return false; // num is odd
}
console.log("Is Number Even  --> "+evenOdd(5))