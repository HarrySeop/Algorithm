function solution(numbers) {
    numbers.sort((a, b) => a - b);
    
    const firstMultiple = numbers[0] * numbers[1];
    const secondMultiple = numbers.pop() * numbers.pop();
    
    return Math.max(firstMultiple, secondMultiple);
}