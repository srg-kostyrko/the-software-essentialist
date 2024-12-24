export function validateMilitaryTime(time: string): boolean {
  if (!time) return false;
  if (!time.includes("-")) return false;
  let [from, to] = time.split("-");
  if (!from) return false;
  if (!from.includes(":")) return false;
  const [fromHours, fromMinutes] = from.split(":").map(part => part.trim());
  if (fromHours.length < 2) return false;
  if (fromMinutes.length < 2) return false;
  if (!to) return false;
  if (!to.includes(":")) return false;
  return true;
}
