export function validateMilitaryTime(time: string): boolean {
  if (!time) return false;
  if (!time.includes("-")) return false;
  let [from, to] = time.split("-");
  if (!from) return false;
  if (!from.includes(":")) return false;
  if (!to) return false;
  return true;
}
