const getNumber =() =>{
    return Math.floor(Math.random()*1000);
}
class CustomPromise {
    constructor(handler) {
        this.status = "pending";
        this.value = null;

        const resolve = (value) => {
            if (this.status === 'pending') {
                this.status = 'fulfilled';
                this.value = value;
            }
        }

        const reject = (value) => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = value;
            }
        };

        try {
            handler(resolve, reject);
        } catch (e) {
            reject(e)
        }
    }

        then(onFulfilled) {
            if(this.status === 'fulfilled') {
                onFulfilled(this.value);
            }
        }

        catch(onRejected) {
            if(this.status === 'rejected') {
                onRejected(this.value);
            }
        }

}
console.log(getNumber());
const Test = new CustomPromise((resolve,reject)=>{
    if((getNumber()%5) !==0){
        resolve('promise Resolved');
    }
    else{
        reject('promise Rejected');
    }
})

Test.then((value)=>console.log(value));
Test.catch((value)=>console.log(value));

