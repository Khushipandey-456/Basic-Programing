// calling a funcrion checkprime

function checkprime(num){
    for(let i=2;i<=num-1;i++){
        if(num%i==0){ //num %i==0 not a prime num
            return false
        }
    }// //num %i!==0  a prime num
    return true
}
console.log(checkprime(6))