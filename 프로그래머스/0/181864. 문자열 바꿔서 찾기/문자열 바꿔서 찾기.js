function solution(myString, pat) {
    const reverseMyString = [...myString].map((v) => v === "A" ? "B" : "A").join("");
    return reverseMyString.includes(pat) ? 1 : 0;
}