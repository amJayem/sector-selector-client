import React, { createContext } from 'react';

const SelectorContext = createContext();

const SelectorProvider = ({children}) => {
    
    const value = {}
    return (
        <div>
            <SelectorContext.Provider value={value}>
                {children}
            </SelectorContext.Provider>
        </div>
    );
};

export default SelectorProvider;