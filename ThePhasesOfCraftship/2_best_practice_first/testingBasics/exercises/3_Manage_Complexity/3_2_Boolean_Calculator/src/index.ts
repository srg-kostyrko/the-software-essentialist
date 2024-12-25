function resolveLiteral(input: string): boolean {
  return input === "TRUE";
}

export function resolveBooleanExpression(input: string): boolean {
  const tokens = input.split(" ");
  if (tokens.length === 3 && tokens[1] === "AND") {
    return resolveLiteral(tokens[0]) && resolveLiteral(tokens[2]);
  }
  if (tokens.length === 3 && tokens[1] === "OR") {
    return resolveLiteral(tokens[0]) || resolveLiteral(tokens[2]);
  }
  if (tokens[0] === "NOT") {
    return !resolveLiteral(tokens[1]);
  }
  return resolveLiteral(tokens[0]);
}
