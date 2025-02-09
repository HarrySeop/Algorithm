function solution(num_str) {
    return num_str.toString().split('').map(Number).reduce((a, b) => a + b , 0);
}