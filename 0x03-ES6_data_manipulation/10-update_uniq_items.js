const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) throw new Error('Can\'t process');
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
  return map;
};

export default updateUniqueItems;
