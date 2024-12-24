import { validateMilitaryTime } from "./index";

describe("military time validator", () => {
  it.each`
    time             | reason
    ${""}            | ${"empty input"}
    ${"01:12 14:32"} | ${"missing separator between start and end times"}
    ${"- 14:32"}     | ${"missing start time"}
    ${"01:12 -"}     | ${"missing end time"}
    ${"0112 - 14:32"} | ${"missing separator in start time"}
    ${"01:12 - 1432"} | ${"missing separator in end time"}  
    ${"1:12 - 14:32"} | ${"missing leading zero in start hour"}
    ${"01:2 - 14:32"} | ${"missing leading zero in start minutes"}
  `("knows that `$time` is invalid because of $reason", ({ time }) => {
    expect(validateMilitaryTime(time)).toBeFalsy();
  });
});
