function solution(absolutes, signs) {
    return absolutes.reduce((sum, v, i) => sum + v * (signs[i] ? 1 : -1), 0);
}