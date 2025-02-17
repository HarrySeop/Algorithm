function solution(arr) {
    let answer = [];
    
    const min = Math.min(...arr);
    arr.splice(arr.indexOf(min), 1);
    
    if(arr.length === 0) {
        answer.push(-1);
    } else {
        answer = arr;
    }
    
    return answer;
}