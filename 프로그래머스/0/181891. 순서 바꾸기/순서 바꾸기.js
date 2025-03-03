function solution(num_list, n) {
    let first = num_list.slice(n);
    let second = num_list.slice(0, n);
    return [...first, ...second];
}