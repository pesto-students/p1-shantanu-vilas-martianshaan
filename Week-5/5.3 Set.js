function hasDuplicate(arr){
    return arr.length !== new Set(arr).size;
}
console.log(hasDuplicate([1,5,-1,4]));
console.log(hasDuplicate([9,3,4,3]));
console.log(hasDuplicate(['shaan','peth','shaan']));

