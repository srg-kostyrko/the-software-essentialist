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
  if (hoursString.length < 2) return false;
  if (minutesString.length < 2) return false;
  return true;
}
