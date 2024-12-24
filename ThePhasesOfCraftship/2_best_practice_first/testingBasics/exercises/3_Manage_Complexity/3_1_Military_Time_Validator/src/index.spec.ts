import { validateMilitaryTime } from "./index";

describe("military time validator", () => {
  it("knows that empty input is invalid", () => {
    expect(validateMilitaryTime("")).toBe(false);
  });

  it("knows that input without start end time separator is invalid", () => {
    expect(validateMilitaryTime("01:12 14:32")).toBe(false);
  });
});
