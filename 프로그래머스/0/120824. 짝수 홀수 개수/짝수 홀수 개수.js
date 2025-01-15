function solution(num_list) {
    let even = 0;
    let odd = 0;
    num_list.map((v) => v % 2 === 0 ? odd++ : even++);
    return [odd, even];
}