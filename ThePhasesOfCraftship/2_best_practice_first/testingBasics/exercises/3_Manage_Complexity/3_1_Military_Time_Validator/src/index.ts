export function validateMilitaryTime(time: string): boolean {
  if (!time) return false;
  if (!time.includes("-")) return false;
  let [from, to] = time.split("-").map((part) => part.trim());
  if (!validateTimePart(from)) return false;
  if (!validateTimePart(to)) return false;
  return true;
}

function validateTimePart(timePart: string): boolean {
  if (!timePart) return false;
  if (!timePart.includes(":")) return false;
  const [hoursString, minutesString] = timePart
    .split(":")
    .map((part) => part.trim());
  return (
    validateNumberPart(hoursString, 23) && validateNumberPart(minutesString, 59)
  );
}

function validateNumberPart(numberPart: string, limit: number): boolean {
  if (numberPart.length < 2) return false;
  const num = parseInt(numberPart, 10);
  if (!Number.isInteger(num)) return false;
  if (num < 0 || num > limit) return false;
  return true;
}
