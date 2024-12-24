export function validateMilitaryTime(time: string): boolean {
  if (!time) return false;
  if (!time.includes("-")) return false;

  return true;
}
