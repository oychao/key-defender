let i = 0;

const store = new WeakMap();

export function k(item) {
  if (typeof item !== 'object' && typeof item !== 'function') {
    throw new TypeError(`item of list should be an object rather than a ${typeof item}`);
  }
  if (store.has(item)) {
    return store.get(item);
  }
  const key = `${++i}`;
  store.set(item, key);
  return key;
}

export default k;
