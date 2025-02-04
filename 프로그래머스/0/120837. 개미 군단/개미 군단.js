function solution(hp) {
    let answer = 0;
    let leftHp = 0;
    
    const firstAntAttack = hp % 5;
    answer += Math.floor(hp / 5);
    
    const secondAntAttack = firstAntAttack % 3;
    answer += Math.floor(firstAntAttack / 3);
    
    const thirdAntAttack = secondAntAttack / 1;
    
    answer += thirdAntAttack;
    return answer;
}