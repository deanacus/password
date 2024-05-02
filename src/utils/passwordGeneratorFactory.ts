import { randomNumberGeneratorFactory } from './randomNumberGeneratorFactory';

import type { Options } from '@/context/Options';

type CharacterClass = keyof Omit<Options, 'length'>;

const isCharacterClass = (maybe: string): maybe is CharacterClass =>
  ['lower', 'upper', 'numeric', 'special'].includes(maybe);

const characterClassesMap: Record<CharacterClass, string> = {
  lower: 'abcdefghijkmnpqrstuvwxyz',
  upper: 'ABCDEFGHJKLMNPQRSTUVWXYZ',
  numeric: '23456789',
  special: '!?%*+=-/@#$&_~\\',
};

const createDict = (options: Options) => {
  return Object.entries(options).reduce((result, [key, value]) => {
    if (isCharacterClass(key) && value) {
      result += characterClassesMap[key];
    }
    return result;
  }, '');
};

export const passwordGeneratorFactory = (options: Options) => {
  const { length } = options;
  const dict = createDict(options);
  const randomIdx = randomNumberGeneratorFactory(dict.length);
  const getCharacter = () => dict[randomIdx()];
  return () => Array.from({ length }, getCharacter).join('');
};
