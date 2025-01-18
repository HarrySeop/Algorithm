function solution(n) {
    return String(n).split("").map(Number).reduce((arr, cur) => arr + cur, 0);
}