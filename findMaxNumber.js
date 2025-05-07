function findMaxNumber(arr) {
    if(!Array.isArray(arr)){
        return "Not an array";
    }
    if(arr.length==0){
        return null;
    }
    const max = arr.reduce((acc,curr)=>{
        if(curr>acc)
        {
            acc=curr;
        }
        return acc;
    },arr[0])
    return max;
}
console.log(findMaxNumber([1,3,2,7]));
