//Max Sum Contiguous subArray 
const myMaxSubArray=(array)=>{
    let n=array.length ;
    let max= array[0];
    for(let i=0;i<array.length;i++){ //1234 
        for(let j=i;j<array.length;j++){
            let sum=0;
            for(let k=i;k<=j;k++){
                sum=sum+array[k]
            }
            max = Math.max(sum,max);
        }
    }
   return max;
}
console.log(myMaxSubArray([1,2,3,4,-10]));
console.log(myMaxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
//time complexity is o(n3)
//space complexity is o()

//spiral matrix
const spiralMatrix=(arr)=>{
    let m=arr[0].length;
    let n= arr.length;
    console.log(`Given Matrix is of ${m}*${n} `);
    let result=[];
   
    let top=0;
    let left=0;
    let bottom=n-1;
    let right=m-1;

    while(left<=right && top<=bottom){
        for(let i=left;i<=right;i++){
            result.push(arr[left][i]);
        }
        left++;
        //top to botto,
        for(let i=top;i<=bottom;i++){
            result.push(arr[i][right]);
        }
        right--;
        // right to left
        if(top<=bottom){
            for(let i=right;i>=left;i--){
            result.push(arr[bottom][i]);
            bottom--;
            }
        }
        if(left<=right){
            for(let i=bottom;i>=top;i--){
                result.push(arr[i][left]);
            }
            left++ ;
        }
        
    }
    return result;
}

//sort array
let arr=[0,1,1,2,2,0];
arr.sort();
console.log(arr);

// 3 sum
const  sum=(arr,target) =>{
    arr.sort((a,b)=>a-b);
    let n = arr.length;
    let sum;
    for (let i = 0;i<n-2;i++) {
      let j=i+1;
      let k=n-1;
      while(j<k){
          sum=arr[i]+arr[j]+arr[k];
          if(sum==target)  return sum;
          else if(target>sum) k--;
          else if(target <sum) j++;
      }
}
return sum;
}
console.log(sum([-1,2,1,-4],1))

//best time to buy and sell stock
function maxProfit(prices){
    let maxProfit =0;
       let minprice= prices[0];
       for (let sell=1;sell<prices.length;sell++){
        let sellPrice = prices[sell];
        let profit = sellPrice+ minprice;
        maxProfit = Math.max(maxProfit,profit);
        if(sellPrice<minprice){
            minprice=sellPrice
        }
       }
       return maxProfit;
}