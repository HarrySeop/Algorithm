function solution(s){
    const count_Y = [...s].reduce((cnt, v) => cnt + (v.toUpperCase() === "Y"), 0);
    const count_P = [...s].reduce((cnt, v) => cnt + (v.toUpperCase() === "P"), 0);
    
    return count_Y === count_P;
}