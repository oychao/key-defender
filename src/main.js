const DICT = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890';
const DICT_LEN = DICT.length;

const store = new WeakMap();

export default function (item, keyLen = 10) {
  if (typeof item !== 'object') {
    throw new Error(`item of list should be an object while a ${typeof item} is given`);
  }
  if (store.has(item)) {
    return store.get(item);
  }
  const ret = [];
  const legalLen = keyLen < 10 ? 10 : keyLen;
  let i;
  for (i = 0; i < legalLen; i += 1) {
    ret.push(Math.floor(Math.random() * DICT_LEN));
  }
  const str = ret.join('');
  store.set(item, str);
  return str;
}
