import React, { createContext, useEffect, useState, useMemo } from 'react';
import { API } from '../lib/axios';
import { defaultTheme } from '../styles/theme/default';
import { darkTheme } from '../styles/theme/dark';

// eslint-disable-next-line react-refresh/only-export-components
export const PortifolioContext = createContext({});

const PortifolioContextProvider = (props) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const [isDarkTheme, setIsDarkTheme] = useState(() => {
        const savedTheme = localStorage.getItem('aa-portifolio-theme');

        if (!savedTheme) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches === 'dark';
        }

        return savedTheme === 'dark';
    });

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

    const toggleTheme = () => {
        const newTheme = !isDarkTheme;
        setIsDarkTheme(newTheme);
        localStorage.setItem('aa-portifolio-theme', newTheme ? 'dark' : 'light');
    };

    const currentTheme = isDarkTheme ? darkTheme : defaultTheme;

    const contextValue = useMemo(() => ({
        projects,
        loading,
        error,
        refetchProjects: fetchProjects,
        isDarkTheme,
        toggleTheme,
        currentTheme
    }), [projects, loading, error, isDarkTheme, currentTheme]);

    return (
        <PortifolioContext.Provider value={contextValue}>
            {props.children}
        </PortifolioContext.Provider>
    );
};

export default PortifolioContextProvider;
