export const slugifyStr = (str: string): string =>
  str
    .normalize("NFKD")
    .toLocaleLowerCase("en")
    .trim()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-|-$/g, "");

export const slugifyAll = (arr: string[]) => arr.map(str => slugifyStr(str));
