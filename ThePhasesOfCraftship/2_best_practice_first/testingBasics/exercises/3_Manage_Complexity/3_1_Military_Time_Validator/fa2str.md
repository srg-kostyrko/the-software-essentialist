Responsibilities:
 - validating time in military format
   - 24 hours format
   - start and end time separated by `-`
   - hours and minutes use 2 digits separated by `:`
   - additional spaces allowed
   - symbols other that digits, `:` and '-' are not valid
Examples:
    - valid
      - `01:12 - 14:32`
      - `22:00 - 23:12`
    - invalid:
      - ``
      - `01:12 14:32` - missing start end separator
      - `- 14:32` - missing start
      - `01:12 - ` - missing end
      - `25:00 - 12:23` - start hour out of range
      - `25:62 - 12:00` - start minute out of range
      - `1:12 - 12:00` - start hour does not have leading zero
      - `11:2 - 12:00` - start minutes does not have leading zero
      - `11:12 - 25:12` - end hour is out of range
      - `11:12 - 12:73` - end minnute is out of range
      - `02:12 - 3:12` - end hour does not have leading zero
      - `02:12 - 03:2` - end minute does not have leading zero
      - `1233 - 13:23` - start time does not have separator
      - `12:33 - 1323` - end time does not have separator
      - `aa:bb - cc:dd` - bad input
      - `-12:33 - 13:23` - bad input

```ts
declare function validateMilitaryTime(time: string): boolean;
```