export function resolveBooleanExpression(input: string): boolean {
  const tokens = input.split(" ");
  if (tokens.length === 3 && tokens[1] === "AND") {
    return (
      resolveBooleanExpression(tokens[0]) && resolveBooleanExpression(tokens[2])
    );
  }
  if (tokens[0] === "NOT") {
    return !resolveBooleanExpression(tokens[1]);
  }
  return input === "TRUE";
}
