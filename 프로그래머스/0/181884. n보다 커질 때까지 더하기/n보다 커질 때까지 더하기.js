function solution(numbers, n) {
    let answer = 0;
    numbers.some(num => {
        answer += num;
        return answer > n;
    });
    return answer;
}