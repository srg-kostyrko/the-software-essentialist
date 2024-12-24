export function validateMilitaryTime(time: string): boolean {
  if (!time) return false;
  if (!time.includes("-")) return false;
  const [from, to] = time.split("-");
  if (!from) return false;
  return true;
}
