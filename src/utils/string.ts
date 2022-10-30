export const humanize = (str: string) =>
  str
    .split('-')
    .map((subStr) => subStr[0]?.toUpperCase() + subStr.slice(1, subStr.length))
    .join(' ');
