function fibo(n, cache={0:0, 1:1, 2:1}){

   if (cache[n] !== undefined){
        return cache[n]
    }

    cache[n] = fibo(n-2, cache) + fibo(n-1, cache);
    console.dir(cache)

    return cache[n];

}



console.log(`fib(0) = ${fibo(0)}`) // 1
console.log(`fib(1) = ${fibo(1)}`) // 1
console.log(`fib(2) = ${fibo(2)}`) // 1
console.time("fibo")
console.log(`fib(10) = ${fibo(10)}`) // 1
console.timeEnd("fibo")

