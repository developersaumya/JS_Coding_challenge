const arr = [4,2];

function sumArr(arr)
{
    let sum = 0;
    arr.forEach((num)=> {
        sum= sum+num
    })
    return sum
}

const sumAr = arr.reduce((acc, cur) => {
    acc = acc+cur;
    return acc;
},0)

console.log(sumAr)
