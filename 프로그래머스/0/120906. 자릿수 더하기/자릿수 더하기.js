function solution(n) {
    let answer = 0;
    let number = n.toString().split('');
    for(let i = 0; i < number.length; i++) {
        answer += parseInt(number[i]);
    }
    return answer;
}