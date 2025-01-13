function solution(sides) {
    let sortedSides = sides.sort((a, b) => a - b);
    return sortedSides[0] + sortedSides[1] > sortedSides[2] ? 1 : 2;
}