function solution(num_list) {
    let first = 0;
    let second = 0;
    for(let i = 0; i < num_list.length; i+=2) {
        first += num_list[i];
    }
    for(let i = 1; i < num_list.length; i+=2) {
        second += num_list[i];
    }
    
    return first > second ? first : second;
}