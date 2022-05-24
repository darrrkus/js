function fib(count) {
    let fib = [];
    if (typeof count != 'number' || !Number.isInteger(count) || count <= 0) {
        return "";
    } else {
        
        if (count == 1) {
            fib = [0];
            return "0";
        } else if (count == 2) {
            fib = [0,1];
            return "0 1";
        } else {
            fib = [0, 1];
            for(let i=2; i< count;i++){
                fib[i] = fib[i-1]+fib[i-2];
            }
            let res = "";
            for(let i=0; i<fib.length; i++){
                res += fib[i];
                if(i!=fib.length-1) {
                    res += " ";
                }
            }
            return res;
        }
    }
    // console.log(fib);

}

console.log(fib(4));
console.log(fib(7));
console.log(fib("7"));
console.log(fib(0));
