function solution(price) {
    let answer = price;
    if(price >= 500000) {
        answer = Math.floor(price * 0.80);
    }
    else if(price >= 300000) {
        answer = Math.floor(price * 0.90);
    }
    else if(price >= 100000) {
        answer = Math.floor(price * 0.95);
    }
    return answer;
}