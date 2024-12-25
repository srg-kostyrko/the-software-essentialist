function resolveLiteral(input: string): boolean {
  return input === "TRUE";
}
function valueToLiteral(input: boolean): string {
  return input ? "TRUE" : "FALSE";
}
function isOperator(input: string): boolean {
  return input === "NOT" || input === "AND" || input === "OR";
}
function isLiteral(input: string): boolean {
  return input === "TRUE" || input === "FALSE";
}

export function resolveBooleanExpression(input: string): boolean {
  const tokens = input.split(" ");
  const stack: string[] = [];
  for (const token of tokens) {
    if (isOperator(token)) {
      stack.push(token);
    } else if (isLiteral(token)) {
      if (stack.length > 0 && isOperator(stack.at(-1)!)) {
        const op = stack.pop();
        if (op === "NOT") {
          stack.push(valueToLiteral(!resolveLiteral(token)));
        } else {
          const left = stack.pop();
          const right = token;
          stack.push(
            op === "AND"
              ? valueToLiteral(resolveLiteral(left!) && resolveLiteral(right))
              : valueToLiteral(resolveLiteral(left!) || resolveLiteral(right))
          );
        }
      } else {
        stack.push(token);
      }
    }
  }
  return resolveLiteral(stack[0]);
}
