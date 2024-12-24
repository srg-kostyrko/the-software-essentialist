import { validateMilitaryTime } from "./index";

describe("military time validator", () => {
  it.each([`01:12 - 14:32`, `22:00 - 23:12`, "23:59 - 00:00"])(
    "knows that `%s` is valid",
    (time) => {
      expect(validateMilitaryTime(time)).toBeTruthy();
    }
  );

  it.each`
    time               | reason
    ${""}              | ${"empty input"}
    ${"01:12 14:32"}   | ${"missing separator between start and end times"}
    ${"- 14:32"}       | ${"missing start time"}
    ${"01:12 -"}       | ${"missing end time"}
    ${"0112 - 14:32"}  | ${"missing separator in start time"}
    ${"01:12 - 1432"}  | ${"missing separator in end time"}
    ${"1:12 - 14:32"}  | ${"missing leading zero in start hour"}
    ${"01:12 - 4:32"}  | ${"missing leading zero in end hour"}
    ${"01:2 - 14:32"}  | ${"missing leading zero in start minutes"}
    ${"01:12 - 14:3"}  | ${"missing leading zero in end minutes"}
    ${"25:12 - 14:32"} | ${"start hour is out of range"}
    ${"01:12 - 25:32"} | ${"end hour is out of range"}
    ${"01:60 - 14:23"} | ${"start minutes is out of range"}
    ${"01:12 - 14:60"} | ${"end minutes is out of range"}
    ${"aa:12 - 14:32"} | ${"start hour is not a number"}
    ${"01:12 - bb:32"} | ${"end hour is not a number"}
    ${"01:aa - 14:32"} | ${"start minutes is not a number"}
    ${"01:12 - 14:bb"} | ${"end minutes is not a number"}
    ${"000:23 - 23:12"} | ${"start hour has more than 2 chars"}
    ${"00:000 - 23:12"} | ${"start minutes has more than 2 chars"}
    ${"00:23 - 000:00"} | ${"end hour has more than 2 chars"}
    ${"00:23 - 23:000"} | ${"end minutes has more than 2 chars"}
  `("knows that `$time` is invalid because of $reason", ({ time }) => {
    expect(validateMilitaryTime(time)).toBeFalsy();
  });
});
