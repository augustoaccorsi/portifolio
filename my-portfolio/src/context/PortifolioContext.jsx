import React, { createContext, useEffect, useState } from 'react';
import { API } from '../lib/axios';

// eslint-disable-next-line react-refresh/only-export-components
export const PortifolioContext = createContext({});

const PortifolioContextProvider = (props) => {
    const [projects, setProjects] = useState([]);

    const fetchProjects = async () => {
        const response = await API.get('/repos?sort=updated&direction=desc');
        setProjects(response.data);
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <PortifolioContext.Provider value={{ projects }}>
            {props.children}
        </PortifolioContext.Provider>
    );
};

export default PortifolioContextProvider;
