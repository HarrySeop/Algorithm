function solution(num_list) {
    const oddList = num_list.filter((v) => v % 2 === 1);
    const evenList = num_list.filter((v) => v % 2 === 0);
    
    const oddNumber = Number(oddList.join(''));
    const evenNumber = Number(evenList.join(''));
    
    const answer = oddNumber + evenNumber;
    
    return answer;
}