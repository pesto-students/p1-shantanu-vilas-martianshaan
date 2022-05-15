/*Implement Fibonacci Series with Iterators*/

//fibonacci Iterator
//1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89
const Fib = (n)=>({
    [Symbol.iterator] : ()=>{
     let i=1;
     let old =0; new1=0;
     return {
         next : ()=>{
             if(i++<=n){
                 [old,new1]=[new1,(old+new1) || 1];
                 return {value :old,done:false}
             }
             else{
                 return {done : true}
             }
         }
     }
    }
});
console.log(...Fib(7));
//can be printed by following method also
// for (let num of Fib(5)) {
//     console.log(num)
// }