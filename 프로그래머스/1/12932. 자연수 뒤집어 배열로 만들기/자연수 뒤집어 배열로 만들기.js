function solution(n) {
    var answer = n.toString().split('').reverse();
    const numberAnswer = answer.map((x) => Number(x));
    return numberAnswer;
}