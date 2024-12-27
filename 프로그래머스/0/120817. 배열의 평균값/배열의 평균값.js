function solution(numbers) {
    let sum = 0;
    let average = 0;
    let answer = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
        average = (sum / numbers.length).toFixed(1);
    }
    return average;
}