export function removeFirstLeadingZero(numberStr: string) {
  const result = numberStr.replace(/^0/, "");
  return result === "" ? "0" : result;
}
