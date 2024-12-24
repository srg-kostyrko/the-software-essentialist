import { validateMilitaryTime } from "./index";

describe("military time validator", () => {
  it("knows that empty input is invalid", () => {
    expect(validateMilitaryTime("")).toBe(false);
  });

  it("knows that '01:12 14:32' is invalid because of missing separator", () => {
    expect(validateMilitaryTime("01:12 14:32")).toBe(false);
  });

  it("knows that `- 14:32` is invalid because of missing start time", () => {
    expect(validateMilitaryTime("- 14:32")).toBe(false);
  })
});
