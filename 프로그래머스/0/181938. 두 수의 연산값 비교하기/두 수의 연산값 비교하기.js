function solution(a, b) {
    let concatNumber = Number(String(a) + String(b));
    let doubleMultiple = 2 * a * b;
    let answer = concatNumber;
    
    if(concatNumber < doubleMultiple) {
        answer = doubleMultiple;
    }
    
    return answer;
}