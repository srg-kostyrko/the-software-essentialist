export function resolveBooleanExpression(input: string): boolean {
  const tokens = input.split(" ");
  if (tokens[0] === "NOT") {
    return !resolveBooleanExpression(tokens[1]);
  }
  return input === "TRUE";
}
