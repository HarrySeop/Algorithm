function solution(n) {
    let answer = -1;
    const x = Math.sqrt(n);
    if(Number.isInteger(x)) {
        answer = Math.pow(x + 1, 2);
    }
    return answer;
}