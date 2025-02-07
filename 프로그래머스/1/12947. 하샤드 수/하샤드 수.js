function solution(x) {
    const arraySum = String(x)
                        .split('')
                        .map(Number)
                        .reduce((sum, el) => sum += el, 0);
    return x % arraySum === 0;
}