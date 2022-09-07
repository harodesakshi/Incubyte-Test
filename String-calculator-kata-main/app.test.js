const StringCalculator = require("./app");
//tests
describe("Calculator Tests", () => {
  beforeEach(() => {
    this.stringcalc = new StringCalculator();
  });
  test("Empty String", () => {
    expect(this.stringcalc.add("")).toBe(0);
  });
  test("String with one Element", () => {
    expect(this.stringcalc.add("3")).toBe(3);
  });
  test("String with one Element(2)", () => {
    expect(this.stringcalc.add("99")).toBe(99);
  });
  test("String with two Elements", () => {
    expect(this.stringcalc.add("2,4")).toBe(6);
  });
  test("String with two Elements(2)", () => {
    expect(this.stringcalc.add("22,88")).toBe(110);
  });
  test("String with three Elements", () => {
    expect(this.stringcalc.add("2,4,6")).toBe(12);
  });
  test("String with three Elements(2)", () => {
    expect(this.stringcalc.add("22,88,90")).toBe(200);
  });
  test("String with alphabets", () => {
    expect(this.stringcalc.add("1,2,a,c")).toBe(7);
  });
  test("String with alphabets(2)", () => {
    expect(this.stringcalc.add("1,2,z")).toBe(29);
  });
  test("String with Uppercase alphabets", () => {
    const ans = () => this.stringcalc.add("1,2,Z");
    expect(ans).toThrow(new Error("Uppercase letters not allowed!"));
  });
  test("String with Uppercase alphabets(2)", () => {
    const ans = () => this.stringcalc.add("A,a,10");
    expect(ans).toThrow(new Error("Uppercase letters not allowed!"));
  });
  test("Ignore numbers greater then 1000", () => {
    expect(this.stringcalc.add("1002,2,4")).toBe(6);
  });
  test("Ignore numbers greater then 1000(2)", () => {
    expect(this.stringcalc.add("9999,61,4")).toBe(65);
  });
  test("String with negative elements", () => {
    const ans = () => this.stringcalc.add("-4,2,4");
    expect(ans).toThrow(new Error("Negative numbers not allowed!"));
  });
  test("String with different delimeter", () => {
    expect(this.stringcalc.add("1;2;3", ";")).toBe(6);
  });
});
