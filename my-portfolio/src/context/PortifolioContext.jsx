import React, { createContext, useEffect, useState, useMemo } from 'react';
import { API } from '../lib/axios';

// eslint-disable-next-line react-refresh/only-export-components
export const PortifolioContext = createContext({});

const PortifolioContextProvider = (props) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await API.get('/repos?sort=updated&direction=desc');
            setProjects(response.data);
        } catch (err) {
            setError('Failed to fetch projects');
            console.error('Error fetching projects:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    const contextValue = useMemo(() => ({
        projects,
        loading,
        error,
        refetchProjects: fetchProjects
    }), [projects, loading, error]);

    return (
        <PortifolioContext.Provider value={contextValue}>
            {props.children}
        </PortifolioContext.Provider>
    );
};

export default PortifolioContextProvider;
