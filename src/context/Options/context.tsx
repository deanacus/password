import type { Dispatch } from 'react';
import { createContext, useReducer } from 'react';

import { useQueryParams } from '@/hooks/useQueryParams';
import { optionsReducer } from './reducer';
import { optionsSchema } from './schema';

import type { OptionsAction as Action } from './reducer';
import type { Options } from './schema';

const optionsInit: Options = {
  lower: true,
  upper: true,
  numeric: true,
  special: true,
  length: 16,
};

export const OptionsStateCtx = createContext<Options>(optionsInit);
export const OptionsDispatchCtx = createContext<Dispatch<Action>>(() => {});

export const OptionsProvider = ({ children }: React.PropsWithChildren) => {
  const initialState = useQueryParams(optionsSchema);
  const [state, dispatch] = useReducer(optionsReducer, initialState);
  return (
    <OptionsStateCtx.Provider value={state}>
      <OptionsDispatchCtx.Provider value={dispatch}>
        {children}
      </OptionsDispatchCtx.Provider>
    </OptionsStateCtx.Provider>
  );
};
