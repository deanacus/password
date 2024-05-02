const randomInt = (limit: number) => {
  const multiplier =
    globalThis.crypto.getRandomValues(new Uint32Array(1))[0] / (0xffffffff + 1);
  return Math.floor(multiplier * (limit + 1));
};

const alphabet =
  'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!?%*+=-/@#$&_~\\';

export const generatePassword = (length = 12) =>
  Array.from({ length }, () => alphabet[randomInt(alphabet.length)]).join('');
