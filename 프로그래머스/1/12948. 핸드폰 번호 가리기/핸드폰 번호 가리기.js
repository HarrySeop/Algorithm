function solution(phone_number) {
    const length = phone_number.length - 4;
    
    return "*".repeat(length) + phone_number.slice(-4);
}