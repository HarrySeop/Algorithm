function solution(array) {
    let a = [];
     a = array.sort((a,b) => a - b);
     index = Math.floor(a.length/2);
    return array[index] ;
}