import React, { createContext, useReducer } from 'react';
import { initialState, selectorReducer } from '../reducer/Action';

const SelectorContext = createContext();

const SelectorProvider = ({children}) => {

    const [state, dispatch] = useReducer(selectorReducer, initialState);

    const value = {state, dispatch}
    return (
        <div>
            <SelectorContext.Provider value={value}>
                {children}
            </SelectorContext.Provider>
        </div>
    );
};

export default SelectorProvider;