function solution(a, b) {
    const first = Number(a.toString() + b.toString());
    const second = Number(b.toString() + a.toString());
    
    const answer = first > second ? first : second;
    
    return answer;
}