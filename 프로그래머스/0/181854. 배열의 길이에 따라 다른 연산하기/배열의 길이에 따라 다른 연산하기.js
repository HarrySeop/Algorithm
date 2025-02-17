function solution(arr, n) {
    const result = [...arr];
    
    if(arr.length % 2 === 1) {
        for(let j = 0; j < arr.length; j += 2) {
            result[j] += n;            
        }
    } else if(arr.length % 2 === 0) {
        for(let j = 1; j < arr.length; j += 2) {
            result[j] += n;            
        }
    }    

    
    return result;
}