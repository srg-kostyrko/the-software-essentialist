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
      const lastParens = parens.pop();
      if (!lastParens) {
        throw new SyntaxError("Missing opening parenthesis");
      }
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
  if (parens.length > 0) {
    throw new SyntaxError("Missing closing parenthesis");
  }
  return result;
}

function resolveNotOperator(tokens: string[]): string[] {
  const result = [];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === "NOT") {
      if (i === tokens.length - 1) {
        throw new SyntaxError("Missing operand for NOT operator");
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
      if (!left) {
        throw new SyntaxError("Missing left operand for OR operator");
      } else if (i === tokens.length - 1) {
        throw new SyntaxError("Missing right operand for OR operator");
      }
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
      if (!left) {
        throw new SyntaxError("Missing left operand for AND operator");
      } else if (i === tokens.length - 1) {
        throw new SyntaxError("Missing right operand for AND operator");
      }
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
  if (!input) throw new SyntaxError("Empty input");
  const tokens = tokenize(input);
  const withParentesisResolved = resolveParentheses(tokens);
  const withNotResolved = resolveNotOperator(withParentesisResolved);
  const withOrResolved = resolveOrOperator(withNotResolved);
  const withAndResolved = resolveAndOperator(withOrResolved);

  return resolveLiteral(withAndResolved[0]);
}
