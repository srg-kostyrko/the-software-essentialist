Create a boolean calculator that takes a boolean expression (as a string) and evaluates it to compute the correct output boolean result

# Responsibilities

1. Single values
   - "TRUE" -> true
   - "FALSE" -> true
2. NOT operator
   - "NOT TRUE" -> false
   - "NOT FALSE" -> true
3. AND operator
    - "TRUE AND TRUE" -> true
    - "TRUE AND FALSE" -> false
    - "FALSE AND TRUE" -> false
    - "FALSE AND FALSE" -> false
4. OR operator
    - "TRUE OR TRUE" -> true
    - "TRUE OR FALSE" -> true
    - "FALSE OR TRUE" -> true
    - "FALSE OR FALSE" -> false
5. Combination of operators w/ precedence (NOT -> AND -> OR)
   - "TRUE AND NOT FALSE" -> true
   - "FALSE OR NOT FALSE" -> true
   - "TRUE OR TRUE AND FALSE" -> true
   - "TRUE OR FALSE AND NOT FALSE" -> true
6. Parenthesis
   - "(TRUE OR TRUE OR TRUE) AND FALSE" -> false 
   - "NOT (TRUE AND TRUE)" -> false
   - "(TRUE OR FALSE) AND (FALSE OR TRUE)" -> true
   - "NOT (TRUE AND NOT (TRUE OR TRUE))" -> true

# Errors
1. Unclosed parenteses
   - "NOT (TRUE" -> SyntaxError
   - "NOT TRUE)" -> SyntaxError
2. Unknown tokens
   - "TRUE AND 2" -> SyntaxError

```ts
declare function resolveBooleanExpression(input: string): boolean;
```
