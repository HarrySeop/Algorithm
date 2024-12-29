function solution(n) {
    const number = Math.sqrt(n);
    const answer = Number.isInteger(number) ? 1 : 2;
    return answer;
}