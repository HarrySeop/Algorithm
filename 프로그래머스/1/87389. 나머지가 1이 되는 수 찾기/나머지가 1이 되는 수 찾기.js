function solution(n) {
    let count = 0;
    for(let i = 0; i < n; i++) {
        if(n % i === 1) {
            count = i;
            break;
        }
    }
    return count;
}