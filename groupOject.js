function groupBy(arr,key){
    const result = {};
    for(const item of arr){
        const keyValue = item[key];
        if(!result.hasOwnProperty(keyValue)){
            result[keyValue] = [];
        }
        result[keyValue].push(item);
    }
    return result;
}
