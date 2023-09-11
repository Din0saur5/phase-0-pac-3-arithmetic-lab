function add(a,b) {
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;

}

function increment(n){
    n += 1;
    return n;
}

function decrement(n){
    n -= 1;
    return n;
}

function makeInt(string){
    let n = parseInt(string, 10);
    return n
}

function preserveDecimal(string){
   let n = parseFloat(string);
    return n;

}