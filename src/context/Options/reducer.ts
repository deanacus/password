import type { Reducer } from 'react';
import type { Options } from './schema';

export type OptionsAction =
  | { type: 'TOGGLE_LOWER' }
  | { type: 'TOGGLE_UPPER' }
  | { type: 'TOGGLE_NUMERIC' }
  | { type: 'TOGGLE_SPECIAL' }
  | { type: 'SET_LENGTH'; payload: number };

export const optionsReducer: Reducer<Options, OptionsAction> = (
  state,
  action,
) => {
  switch (action.type) {
    case 'TOGGLE_LOWER':
      return { ...state, lower: !state.lower };
    case 'TOGGLE_UPPER':
      return { ...state, upper: !state.upper };
    case 'TOGGLE_NUMERIC':
      return { ...state, numeric: !state.numeric };
    case 'TOGGLE_SPECIAL':
      return { ...state, special: !state.special };
    case 'SET_LENGTH':
      return { ...state, length: action.payload };
    default:
      return state;
  }
};
