let Calculator = require ("./calculator");

//Example test
describe("string calculator", function () {
    it("should return 0 if string is empty", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add("");
        expect(calculatorResult).toBe(0);
    });
});

describe("string calculator", function () {
    it("should return 1 if string is empty", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add(1);
        expect(calculatorResult).toBe(1);
    });
});