export * from "./mdxUtils";

/**
 * @name convertNumberToReadableString
 * @description Converts a number to a US comma separated string
 * @param {number} num
 * @returns {string}
 * @example
 * convertNumberToReadableString(1000) // "1,000"
 * convertNumberToReadableString(1000000) // "1,000,000"
 */

export function convertNumberToReadableString(num: number): string {
  return num.toLocaleString("en-US");
}
