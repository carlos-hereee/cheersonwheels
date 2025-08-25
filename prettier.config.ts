// Example options within your .prettierrc.ts or prettier.config.ts
export default {
  printWidth: 80, // Maximum line length
  tabWidth: 2, // Number of spaces per indentation level
  useTabs: false, // Indent with spaces instead of tabs
  semi: true, // Print semicolons at the end of statements
  singleQuote: true, // Use single quotes instead of double quotes
  trailingComma: "all", // Add trailing commas where valid (e.g., in arrays and objects)
  bracketSpacing: true, // Print spaces between brackets in object literals
  jsxBracketSameLine: false, // Put the > of a multi-line JSX element at the end of the last line instead of being alone on the next line
  arrowParens: "always", // Include parentheses around a sole arrow function parameter
  endOfLine: "lf", // Ensure consistent line endings (LF for Unix/macOS, CRLF for Windows)
};
