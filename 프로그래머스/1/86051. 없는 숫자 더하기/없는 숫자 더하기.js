function solution(numbers) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const sortedNumber = numbers.sort((a, b) => a - b);
    
    const answerArr = arr.filter((v) => !sortedNumber.includes(v));
    return answerArr.reduce((acc, cur) => acc += cur);
}