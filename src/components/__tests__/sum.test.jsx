import {sum} from "../sum"

test("sum function calculates the sum of two numbers a and b", () => {
    const result = sum(7, 9)
    expect(result).toBe(16)
})