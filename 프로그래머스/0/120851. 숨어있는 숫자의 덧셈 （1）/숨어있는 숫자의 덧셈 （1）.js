function solution(my_string) {
    let answer = 0;
    let number = [...my_string]
                    .filter((v) => !isNaN(v))
                    .map(Number)
                    .reduce((a, b) => a + b, 0);
    answer = number;
    return answer;
}