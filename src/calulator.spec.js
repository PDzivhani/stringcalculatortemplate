let Calculator = require ("./calculator");

//Example test
describe("string calculator", function () {
    it("should return 0 if string is empty", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add('');
        expect(calculatorResult).toBe(0);
    });
});
describe("string calculator", function () {
    it("should return 1 number if string", function () {
        let calculator = new Calculator();
        let calculatorResult = calculator.add(4);
        expect(calculatorResult).toBe(4);
    });
});