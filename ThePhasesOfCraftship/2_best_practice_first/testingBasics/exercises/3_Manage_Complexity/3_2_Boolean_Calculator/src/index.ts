function resolveLiteral(input: string): boolean {
  return input === "TRUE";
}

function resolveNotOperator(tokens: string[]): string[] {
  const result = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "NOT") {
      result.push(tokens[i + 1] === "TRUE" ? "FALSE" : "TRUE");
      i++;
    } else {
      result.push(tokens[i]);
    }
  }
  return result;
}

function resolveOrOperator(tokens: string[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "OR") {
      const left = result.pop();
      result.push(
        left === "TRUE" || tokens[i + 1] === "TRUE" ? "TRUE" : "FALSE"
      );
      i++;
    } else {
      result.push(tokens[i]);
    }
  }
  return result;
}

function resolveAndOperator(tokens: string[]): string[] {
  const result: string[] = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "AND") {
      const left = result.pop();
      result.push(
        left === "TRUE" && tokens[i + 1] === "TRUE" ? "TRUE" : "FALSE"
      );
      i++;
    } else {
      result.push(tokens[i]);
    }
  }
  return result;
}

export function resolveBooleanExpression(input: string): boolean {
  const tokens = input.split(" ");
  const withNotResolved = resolveNotOperator(tokens);
  const withOrResolved = resolveOrOperator(withNotResolved);
  const withAndResolved = resolveAndOperator(withOrResolved);

  return resolveLiteral(withAndResolved[0]);
}
