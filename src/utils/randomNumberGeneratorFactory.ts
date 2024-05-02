export const randomNumberGeneratorFactory = (max: number) => {
  return () => {
    const multiplier =
      globalThis.crypto.getRandomValues(new Uint32Array(1))[0] /
      (0xffffffff + 1);
    return Math.floor(multiplier * (max + 1));
  };
};
