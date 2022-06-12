//increment function is called inside a function so output is zero.

function createIncrement() {
    let count=0;
    function increment() {
        count++;
    }
         let message=`Count is ${count}`;
    function log() 
    {
        console.log(message);
    }
return[increment,log];
}
const[increment,log] =createIncrement();
increment();
increment();
increment();
log();// What is logged?
createIncrement(10);
