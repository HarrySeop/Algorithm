function solution(n_str) {
    let breakPoint = 0;
    for(let i = 0; i < n_str.length; i++) {
        if(n_str[i] !== '0') {
            breakPoint = i;
            break;
        }
    }
    
    return n_str.slice(breakPoint);
}