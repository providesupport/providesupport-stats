export default function md5(stringToEncode) {
  function FF(a, b, c, d, m, s, k) {
    let n = a + (b & c | ~b & d) + (m >>> 0) + k;
    return ((n << s) | (n >>> (32 - s))) + b;
  }

  function GG(a, b, c, d, m, s, k) {
    let n = a + (b & d | c & ~d) + (m >>> 0) + k;
    return ((n << s) | (n >>> (32 - s))) + b;
  }

  function HH(a, b, c, d, m, s, k) {
    let n = a + (b ^ c ^ d) + (m >>> 0) + k;
    return ((n << s) | (n >>> (32 - s))) + b;
  }

  function II(a, b, c, d, m, s, k) {
    let n = a + (c ^ (b | ~d)) + (m >>> 0) + k;
    return ((n << s) | (n >>> (32 - s))) + b;
  }

  function byteToHex(byte) {
    return (256 + (byte & 255)).toString(16).substr(-2);
  }

  function bs(byte) {
    return String.fromCharCode(byte & 255);
  }

  function wordToBytes(word) {
    return bs(word) + bs(word >>> 8) + bs(word >>> 16) + bs(word >>> 24);
  }

  let utf8toBytes = function (utf8) {
    return unescape(encodeURIComponent(utf8));
  };

  function bytesToWords(bytes) {
    let bytes_count = bytes.length;
    let bits_count = bytes_count << 3;
    let words = new Uint32Array((bytes_count + 72) >>> 6 << 4);
    for (let i = 0, n = bytes.length; i < n; ++i) words[i >>> 2] |= bytes.charCodeAt(i) << ((i & 3) << 3);
    words[bytes_count >> 2] |= 0x80 << (bits_count & 31);
    words[words.length - 2] = bits_count;
    return words;
  }

  let bytesToMD5 = function (bytes) {
    let words = bytesToWords(bytes);
    let a = 0x67452301;
    let b = 0xEFCDAB89;
    let c = 0x98BADCFE;
    let d = 0x10325476;
    let S11 = 7; let S12 = 12; let S13 = 17; let S14 = 22;
    let S21 = 5; let S22 = 9; let S23 = 14; let S24 = 20;
    let S31 = 4; let S32 = 11; let S33 = 16; let S34 = 23;
    let S41 = 6; let S42 = 10; let S43 = 15; let
      S44 = 21;

    for (let i = 0, ws = words.length; i < ws; i += 16) {
      let AA = a; let BB = b; let CC = c; let
        DD = d;
      a = FF(a, b, c, d, words[i + 0], S11, 0xD76AA478);
      d = FF(d, a, b, c, words[i + 1], S12, 0xE8C7B756);
      c = FF(c, d, a, b, words[i + 2], S13, 0x242070DB);
      b = FF(b, c, d, a, words[i + 3], S14, 0xC1BDCEEE);
      a = FF(a, b, c, d, words[i + 4], S11, 0xF57C0FAF);
      d = FF(d, a, b, c, words[i + 5], S12, 0x4787C62A);
      c = FF(c, d, a, b, words[i + 6], S13, 0xA8304613);
      b = FF(b, c, d, a, words[i + 7], S14, 0xFD469501);
      a = FF(a, b, c, d, words[i + 8], S11, 0x698098D8);
      d = FF(d, a, b, c, words[i + 9], S12, 0x8B44F7AF);
      c = FF(c, d, a, b, words[i + 10], S13, 0xFFFF5BB1);
      b = FF(b, c, d, a, words[i + 11], S14, 0x895CD7BE);
      a = FF(a, b, c, d, words[i + 12], S11, 0x6B901122);
      d = FF(d, a, b, c, words[i + 13], S12, 0xFD987193);
      c = FF(c, d, a, b, words[i + 14], S13, 0xA679438E);
      b = FF(b, c, d, a, words[i + 15], S14, 0x49B40821);
      a = GG(a, b, c, d, words[i + 1], S21, 0xF61E2562);
      d = GG(d, a, b, c, words[i + 6], S22, 0xC040B340);
      c = GG(c, d, a, b, words[i + 11], S23, 0x265E5A51);
      b = GG(b, c, d, a, words[i + 0], S24, 0xE9B6C7AA);
      a = GG(a, b, c, d, words[i + 5], S21, 0xD62F105D);
      d = GG(d, a, b, c, words[i + 10], S22, 0x2441453);
      c = GG(c, d, a, b, words[i + 15], S23, 0xD8A1E681);
      b = GG(b, c, d, a, words[i + 4], S24, 0xE7D3FBC8);
      a = GG(a, b, c, d, words[i + 9], S21, 0x21E1CDE6);
      d = GG(d, a, b, c, words[i + 14], S22, 0xC33707D6);
      c = GG(c, d, a, b, words[i + 3], S23, 0xF4D50D87);
      b = GG(b, c, d, a, words[i + 8], S24, 0x455A14ED);
      a = GG(a, b, c, d, words[i + 13], S21, 0xA9E3E905);
      d = GG(d, a, b, c, words[i + 2], S22, 0xFCEFA3F8);
      c = GG(c, d, a, b, words[i + 7], S23, 0x676F02D9);
      b = GG(b, c, d, a, words[i + 12], S24, 0x8D2A4C8A);
      a = HH(a, b, c, d, words[i + 5], S31, 0xFFFA3942);
      d = HH(d, a, b, c, words[i + 8], S32, 0x8771F681);
      c = HH(c, d, a, b, words[i + 11], S33, 0x6D9D6122);
      b = HH(b, c, d, a, words[i + 14], S34, 0xFDE5380C);
      a = HH(a, b, c, d, words[i + 1], S31, 0xA4BEEA44);
      d = HH(d, a, b, c, words[i + 4], S32, 0x4BDECFA9);
      c = HH(c, d, a, b, words[i + 7], S33, 0xF6BB4B60);
      b = HH(b, c, d, a, words[i + 10], S34, 0xBEBFBC70);
      a = HH(a, b, c, d, words[i + 13], S31, 0x289B7EC6);
      d = HH(d, a, b, c, words[i + 0], S32, 0xEAA127FA);
      c = HH(c, d, a, b, words[i + 3], S33, 0xD4EF3085);
      b = HH(b, c, d, a, words[i + 6], S34, 0x4881D05);
      a = HH(a, b, c, d, words[i + 9], S31, 0xD9D4D039);
      d = HH(d, a, b, c, words[i + 12], S32, 0xE6DB99E5);
      c = HH(c, d, a, b, words[i + 15], S33, 0x1FA27CF8);
      b = HH(b, c, d, a, words[i + 2], S34, 0xC4AC5665);
      a = II(a, b, c, d, words[i + 0], S41, 0xF4292244);
      d = II(d, a, b, c, words[i + 7], S42, 0x432AFF97);
      c = II(c, d, a, b, words[i + 14], S43, 0xAB9423A7);
      b = II(b, c, d, a, words[i + 5], S44, 0xFC93A039);
      a = II(a, b, c, d, words[i + 12], S41, 0x655B59C3);
      d = II(d, a, b, c, words[i + 3], S42, 0x8F0CCC92);
      c = II(c, d, a, b, words[i + 10], S43, 0xFFEFF47D);
      b = II(b, c, d, a, words[i + 1], S44, 0x85845DD1);
      a = II(a, b, c, d, words[i + 8], S41, 0x6FA87E4F);
      d = II(d, a, b, c, words[i + 15], S42, 0xFE2CE6E0);
      c = II(c, d, a, b, words[i + 6], S43, 0xA3014314);
      b = II(b, c, d, a, words[i + 13], S44, 0x4E0811A1);
      a = II(a, b, c, d, words[i + 4], S41, 0xF7537E82);
      d = II(d, a, b, c, words[i + 11], S42, 0xBD3AF235);
      c = II(c, d, a, b, words[i + 2], S43, 0x2AD7D2BB);
      b = II(b, c, d, a, words[i + 9], S44, 0xEB86D391);
      a = (a + AA) >>> 0;
      b = (b + BB) >>> 0;
      c = (c + CC) >>> 0;
      d = (d + DD) >>> 0;
    }

    let hash_bytes = new String(wordToBytes(a) + wordToBytes(b) + wordToBytes(c) + wordToBytes(d));
    hash_bytes.toHex = function () {
      let hex = '';
      for (let i = 0, n = hash_bytes.length; i < n; ++i) hex += byteToHex(hash_bytes.charCodeAt(i));
      return hex;
    };
    return hash_bytes;
  };

  let utf8toMD5 = function (utf8) {
    return bytesToMD5(utf8toBytes(utf8));
  };

  return utf8toMD5(stringToEncode).toHex();
}
