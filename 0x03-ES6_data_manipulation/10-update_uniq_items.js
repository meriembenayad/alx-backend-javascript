const updateUniqueItems = (map) => {
  if (!(map instanceof Map)) throw new Error('Can\'t process');
  map.forEach((key, value) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
};

export default updateUniqueItems;
