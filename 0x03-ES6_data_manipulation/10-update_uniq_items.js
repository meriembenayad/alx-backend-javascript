export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw new Error('Can\'t process');
  for (const el of map) {
    if (el[1] === 1) {
      map.set(el[0], 100);
    }
  }
  return map;
}
