import React, { useState, createContext } from 'react';

export const PortifolioContext = createContext({});

const PortifolioContextProvider = (props) => {

    return (
        <PortifolioContext.Provider
        value={{}}
        >
            {props.children}
        </PortifolioContext.Provider>
    );
};

export default PortifolioContextProvider;