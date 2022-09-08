const CHARS = '0123456789012345678901234567890123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
export default function createRandomString(length) {
  let result = '';
  for (let ii = length; ii--;) {
    result += CHARS[Math.floor(Math.random() * CHARS.length)];
  }
  return result;
}
