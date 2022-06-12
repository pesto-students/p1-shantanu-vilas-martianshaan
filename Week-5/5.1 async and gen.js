let result = function (score){
    return new Promise((resolve,rejct)=>{
        console.log("calculation results...")
        if(score >= 50){
            resolve("Congratulations! You have passed")
        }
        else {
             rejct("you have failed")
        }
    })
}

function grade(response) {
    return new Promise((resolve, reject)=>{
        console.log("calculating your grade...")
        resolve("Your grade is A. " + response)
    })
}

// result(50).then(response =>{
//     console.log("result received")
//     return grade(response)
// }).then(finalgrade=>{
//     console.log("finalgrade")
// }).catch(err=>{
//     console.log(err)
// })

async function calresults(){
    try{
        const response = await result(80)
        console.log("result received")
        const finalgrade = await grade(response)
        console.log("finalgrade")
    }
    catch(err){
             console.log(err)
    }
}

calresults()

//function chaining
//generator 