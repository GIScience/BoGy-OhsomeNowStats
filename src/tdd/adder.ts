export function add(...summands: number[]): number {
    let sum = 0;
    for (let summand of summands) {
        sum = sum + summand;
    }
    return sum;
}
