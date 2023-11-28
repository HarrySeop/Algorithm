function fcgcd(a, b) {
    return (a%b) ? fcgcd(b, a%b) : b;
}

function solution(numer1, denom1, numer2, denom2) {
    let numer = numer1 * denom2 + numer2 * denom1;
    let denom = denom1 * denom2;
    let gcd = fcgcd(numer, denom);
    
    return [numer/gcd, denom/gcd];
}