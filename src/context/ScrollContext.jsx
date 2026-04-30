import { createContext, useContext } from 'react';

export const ScrollContext = createContext({ scrollToPage: () => {} });
export const useScrollContext = () => useContext(ScrollContext);
