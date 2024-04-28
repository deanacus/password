const alphabet =
  'abcdefghijkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789!?%*+=-/@#$&_~\\';

const randomCharacter = () =>
  alphabet[Math.floor(Math.random() * alphabet.length)];

export const generatePassword = (length = 12) =>
  Array.from({ length }, randomCharacter).join('');
