export default function cleanSet(set, startString) {
  let result = '';
  if (!startString || !startString.length) return result;
  for (const item of set) {
    if (item && item.startsWith(startString)) {
      result += `${item.slice(startString.length)}-`;
    }
  }
  return result.slice(0, result.length - 1);
}
