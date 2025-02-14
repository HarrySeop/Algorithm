function solution(num_list) {
    const sortNumList = num_list.sort((a, b) => a - b);
    return sortNumList.slice(0, 5);
}