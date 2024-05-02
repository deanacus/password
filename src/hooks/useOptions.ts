import { useContext } from 'react';

import { OptionsDispatchCtx, OptionsStateCtx } from '@/context/Options';

export const useOptions = () => {
  const state = useContext(OptionsStateCtx);
  const dispatch = useContext(OptionsDispatchCtx);

  const toggleLowerCase = () => dispatch({ type: 'TOGGLE_LOWER' });
  const toggleUpperCase = () => dispatch({ type: 'TOGGLE_UPPER' });
  const toggleNumeric = () => dispatch({ type: 'TOGGLE_NUMERIC' });
  const toggleSpecial = () => dispatch({ type: 'TOGGLE_SPECIAL' });
  const setLength = (payload: number) =>
    dispatch({ type: 'SET_LENGTH', payload });

  return {
    ...state,
    toggleLowerCase,
    toggleUpperCase,
    toggleNumeric,
    toggleSpecial,
    setLength,
  };
};
