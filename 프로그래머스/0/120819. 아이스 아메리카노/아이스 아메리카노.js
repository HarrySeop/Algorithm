function solution(money) {
    var answer = [];
    const coffee = Math.floor(money / 5500);
    const change = money - (coffee * 5500);
    answer.push(coffee);
    answer.push(change);
    return answer;
}