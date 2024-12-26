function resolveLiteral(input: string): boolean {
  return input === "TRUE";
}

function tokenize(input: string): string[] {
  const tokens: string[] = [];
  let currentWord: string[] = [];
  for (const char of input) {
    if (char === "(" || char === ")" || char === " ") {
      if (currentWord.length > 0) {
        tokens.push(currentWord.join(""));
      }
      currentWord = [];
      if (char !== " ") tokens.push(char);
    } else {
      currentWord.push(char);
    }
  }
  if (currentWord.length > 0) {
    tokens.push(currentWord.join(""));
  }
  return tokens;
}

function resolveParentheses(tokens: string[]): string[] {
  const result: string[] = [];
  const parens: string[][] = [];
  for (const token of tokens) {
    if (token === "(") {
      parens.push([]);
    } else if (token === ")") {
      const lastParens = parens.pop() ?? [];
      const resolved = resolveBooleanExpression(lastParens.join(" "));
      const value = resolved ? "TRUE" : "FALSE";
      if (parens.length > 0) {
        parens.at(-1)?.push(value);
      } else {
        result.push(value);
      }
    } else {
      if (parens.length > 0) {
        parens.at(-1)?.push(token);
      } else {
        result.push(token);
      }
    }
  }
  return result;
}

function resolveNotOperator(tokens: string[]): string[] {
  const result = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "NOT") {
      if (i === tokens.length - 1) {
        throw new SyntaxError("Unexpected end of expression");
      }
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
  const tokens = tokenize(input);
  const withParentesisResolved = resolveParentheses(tokens);
  const withNotResolved = resolveNotOperator(withParentesisResolved);
  const withOrResolved = resolveOrOperator(withNotResolved);
  const withAndResolved = resolveAndOperator(withOrResolved);

  return resolveLiteral(withAndResolved[0]);
}
