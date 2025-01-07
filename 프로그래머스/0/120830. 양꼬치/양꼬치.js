function solution(n, k) {
    const lambSkewers = 12000 * n;
    const drinks = 2000 * k;
    const tenServingsUnit = Math.floor(n / 10);
    
    let answer = lambSkewers + drinks;
    
    if(tenServingsUnit > 0) {
        answer -= (tenServingsUnit * 2000);
    }
    
    return answer;
}